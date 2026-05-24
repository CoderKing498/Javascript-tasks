let song = document.getElementById('song');
let btn = document.getElementById('btnAgregar');
let playList = document.getElementById('wowPlaylist');

function getSongs(){
    return JSON.parse(localStorage.getItem('songs')) || [];
}

function saveSongs(songs){
    localStorage.setItem('songs', JSON.stringify(songs));
}
console.log(getSongs());

btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Get current songs array
    let songs = getSongs();

    // Add songs to array
    songs.push(song.value);

    saveSongs(songs); 

    // New list item
    const play = document.createElement("p");
    
    // Add song text
    play.textContent = song.value;

    window.localStorage.setItem('song', song.value);

    // Add item to playlist
    playList.appendChild(play);

    // Clear input field
    song.value = '';
})

console.log(getSongs());