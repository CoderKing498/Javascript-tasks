const apiURL = 'http://localhost:3000/playlist'
const song = document.getElementById('song');
const addBtn = document.getElementById('addBtn');
const btnSync = document.getElementById('btnSync');
const playList = document.getElementById('wowPlaylist');

// Global array to store songs in memory
let globalSongs = [];

/** 
    * Updates the entire application state at once:
    * Syncs Memory, LocalStorage, and renders the DOM.
*/
function updateState(newSongs){
    globalSongs = newSongs;
    localStorage.setItem('persistent_songs', JSON.stringify(globalSongs));
    renderSongs();
}

/*
    * GET: Fetches songs from the server.
    * Uses LocalStorage as a failback if the server is offline.
*/
async function loadSongs(){
    try{
        const answer = await fetch(apiURL);
        if(!answer.ok) throw new Error('Server error');
        const data = await answer.json();
        console.log('Successfully synced with server');
        updateState(data);
    }catch (error){
        console.warn('Server offline. Loading local backup');
        const backup = JSON.parse(localStorage.getItem('persistent_songs')) || [];
        updateState(backup);
    }
}

/** 
 * POST: Adds a new song to the server first, then updates local state.
*/
async function addSong(text){
    try{
        const answer = await fetch(apiURL,{
            method : 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({texto: text})
        });
        if (!answer.ok) throw new Error('Could not add song');
        const newSong = await answer.json();
        console.log('POST successful', newSong);
        updateState([...globalSongs, newSong]);
    }catch (error){
        console.error('Error in POST:', error);
        alert('Sorry, bro. Could not connect to the server to save the song.');
    }
}

/**
 * PUT: Updates an existing song on the server and then locally.
 */
async function editSong(id, newText){
    try{
        const answer = await fetch(`${apiURL}/${id}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({texto: newText})
        });
        if (!answer.ok) throw new Error('Could not update the song');
        const updatedSong = await answer.json();
        console.log('PUT successful:', updatedSong);
        updateState (globalSongs.map(song => song.id === id ? updatedSong : song));
    } catch(error){
        console.error('Error in PUT:', error);
        alert('Error updating the song on the server.');
    }
}

/**
 * DELETE: Removes a song from the server and then from local state.
 */
async function deleteSong(id) {
    try{
        const answer = await fetch(`${apiURL}/${id}`, {
        method: 'DELETE'
    });
        if (!answer.ok) throw new Error('Could not delete song');
        console.log('DELETE successful for id', id);
        updateState(globalSongs.filter(song => song.id !== id));
    }catch(error){
        console.error('Error in DELETE', error);
        alert('Error deleting the song from the server');
    }
}

/**
 * Renders the playList in the DOM based on the global state.
 */
function renderSongs() {
    playList.innerHTML = '';

    if (globalSongs.length === 0) {
        playList.style.display = 'flex';
        playList.innerHTML =
            '<p class="empty-msg">No songs found. Click "Sync List" or add a new song.</p>';
        return;
    }

    playList.style.display = 'flex';

    globalSongs.forEach((song) => {
        let li = document.createElement('li');

        li.classList.add('song-item');

        li.innerHTML = `
        <div class="song-content">
            <p class="song-text">${song.texto}</p>
            <div class="actions">
                <button class="btn-edit">Edit</button>
                <button class="btn-delete">Delete</button>
            </div>
        </div>`;

        li.querySelector('.btn-delete').onclick = () =>
            deleteSong(song.id);

        li.querySelector('.btn-edit').onclick = () => {
            const newText = prompt(
                'Edit your favorite song:',
                song.texto
            );

            if (newText !== null && newText.trim() !== '') {
                editSong(song.id, newText.trim());
            }
        };

        playList.appendChild(li);
    });
}

// Event listener for the "Add" button
addBtn.addEventListener('click', async function(event){
    event.preventDefault();
    const songText = song.value.trim();

    if(songText === ''){
        alert('Please Please Please, add your favorite song.');
        return;
    }

    await addSong(songText);
    song.value = '';
});

// Event listener for manual Sync
btnSync.addEventListener('click', async () =>{
    btnSync.textContent = 'Loading...';
    btnSync.disabled = true;
    await loadSongs();
    btnSync.textContent = 'Sync List';
    btnSync.disabled = false;
});

// Initial application load
loadSongs();