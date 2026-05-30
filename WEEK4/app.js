// TASK 2: Identify HTML'S ID User interacting
let song = document.getElementById('song');
let btn = document.getElementById('btnAgregar');
let playList = document.getElementById('wowPlaylist');


// TASK 3 DOM (Document Object Model) dynamic manipulation
btn.addEventListener('click', function (event){
    event.preventDefault();

    const textSong = song.value.trim();

    // Validation of empty input
    if(textSong === ''){
        alert('¿Vas a dejar tirada tu playlist?');
        return;
    } else{
       // Add a new song into the previous created array
        const savedSongs = getSongs();
        savedSongs.push(textSong);

        // Save updated songs after adding a song
        saveSongs(savedSongs);

        // Render playlist again
        showPlayList();

        // Clear input
        song.value = '';
    }

});

// TASK 4: DATA PERSISTENCE LOG

// Create array using JSON.parse
function getSongs() {
    return JSON.parse(localStorage.getItem('songs')) || [];
}

/* Save songs using localStorage and JSON.stringify */ 
function saveSongs(songs) {
    localStorage.setItem('songs', JSON.stringify(songs));
}

console.log(getSongs());

// Create a function that shows the playlist and deleted the undesired songs
function showPlayList() {

    let valores = getSongs();

    // CLEAR PLAYLIST
    playList.innerHTML = '';

    // Hide the playlist of songs if there is empty
    if (valores.length === 0) {
        playList.style.display = 'none';
        return;
    }

    // Show playlist
    playList.style.display = 'flex';

    valores.forEach((valor, indice) => {

        // Create the list of the songs with createElemebt
        let li = document.createElement('li');

        li.classList.add('song-item');

        // Insert HTML content to the html archive I was create before
        li.innerHTML = `
            <div class="songs-content">
                <p>${valor}</p>
                <button class="btn-eliminar">Eliminar</button>
            </div>
        `;

        // Select delete button after creating btnDelete in the InnerHTML
        let btnEliminar = li.querySelector('.btn-eliminar');


        // Delete the song with a EventListener 
        btnEliminar.addEventListener('click', function () {

            // Use removeChild to delete DOM song
            playList.removeChild(li);
            // Remove selected song
            const updatedSongs = valores.filter((_, i) => {
                return i !== indice;
            });

            // localStorage.removeItem()
            if (updatedSongs.length === 0){
                localStorage.removeItem('songs');
            }else{
            // Save updated playlist with saveSongs with the const updated
            saveSongs(updatedSongs);
            }
            // Re-render the playList with the previous function
            showPlayList();
        });
        
        // Add songs into the playlist of any genre
        playList.appendChild(li);
    });
}

// Load playlist on page start
showPlayList(); // Show playlist when loading the page.