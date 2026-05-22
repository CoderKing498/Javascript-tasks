let song = document.getElementById('song')
let btn = document.getElementById('btnAgregar')
let playList = document.getElementById('wowPlaylist')

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const play = document.createElement("p")
    play.textContent = song.value


    playList.appendChild(play)

    song.value = ''
})

console.log(song)
console.log(playList)