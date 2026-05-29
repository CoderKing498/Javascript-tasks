let song = document.getElementById('song');
let btn = document.getElementById('btnAgregar');
let playList = document.getElementById('wowPlaylist');

function getSongs() {
    return JSON.parse(localStorage.getItem('songs')) || [];
}

function saveSongs(songs) {
    localStorage.setItem('songs', JSON.stringify(songs));
}

btn.addEventListener("click", (e) => {
    e.preventDefault();

    const textSong = song.value.trim();

    if (textSong === '') {
        alert("¿No agregarás ninguna canción?");
        return;
    }

    const savedSongs = getSongs();
    savedSongs.push(textSong);

    saveSongs(savedSongs);
    showPlayList();

    song.value = '';
});

function showPlayList() {

    let valores = getSongs();

    // LIMPIAR LISTA
    playList.innerHTML = '';

    if (valores.length === 0) {
        playList.style.display = 'none';
        return;
    }

    playList.style.display = 'flex';

    valores.forEach((valor, indice) => {

        let li = document.createElement('li');

        li.classList.add('song-item');

        li.innerHTML = `
            <div class="songs-content">
                <p>${valor}</p>
                <button class="btn-eliminar">Eliminar</button>
            </div>
        `;

        let btnEliminar = li.querySelector('.btn-eliminar');

        btnEliminar.addEventListener('click', function () {

            const updatedSongs = valores.filter((_, i) => {
                return i !== indice;
            });

            saveSongs(updatedSongs);
            showPlayList();
        });

        playList.appendChild(li);
    });
}

showPlayList();