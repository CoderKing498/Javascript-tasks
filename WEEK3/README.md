# 🎵 Week 3 — Make-O-Playlist

A dynamic playlist web app built with **vanilla JavaScript** and **DOM manipulation**. Users can add and remove songs, with data persisted across sessions using `localStorage`.

---

## 📁 Project Structure

```
WEEK3/
├── manipulación_dom.html   # Main HTML structure
├── app.js                  # JavaScript logic & DOM manipulation
├── playlist.css            # Custom styles
└── img/
    ├── disco.svg
    └── playlist.svg
```

---

## 🚀 Features

- **Add songs** — Type a song name and press *+ Agregar* to add it to the playlist.
- **Delete songs** — Each song has an *Eliminar* button to remove it individually.
- **Persistent storage** — Songs are saved in `localStorage` and restored on page reload.
- **Empty state handling** — The playlist section is hidden when there are no songs.
- **Input validation** — Alerts the user if they try to submit an empty field.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Custom styling and layout |
| JavaScript (ES6+) | DOM manipulation and app logic |
| localStorage | Client-side data persistence |
| Tailwind CSS (CDN) | Utility class support |

---

## 🧠 JavaScript Concepts Covered

### DOM Selection
```js
document.getElementById('song');
document.getElementById('btnAgregar');
document.getElementById('wowPlaylist');
```

### Dynamic Element Creation
```js
let li = document.createElement('li');
li.classList.add('song-item');
li.innerHTML = `...`;
playList.appendChild(li);
```

### Event Listeners
```js
btn.addEventListener('click', (e) => { ... });
btnEliminar.addEventListener('click', function() { ... });
```

### localStorage Persistence
```js
// Save
localStorage.setItem('songs', JSON.stringify(songs));

// Read
JSON.parse(localStorage.getItem('songs')) || [];

// Clear
localStorage.removeItem('songs');
```

### Array Filtering (Delete Logic)
```js
const updatedSongs = valores.filter((_, i) => i !== indice);
```

---

## 📄 How It Works

1. On page load, `showPlayList()` is called to render any previously saved songs.
2. When the user clicks *+ Agregar*, the input is validated and the song is pushed to the array saved in `localStorage`.
3. The playlist re-renders after every add or delete operation.
4. When deleting a song, `removeChild` removes the DOM element, and the songs array is filtered and re-saved. If no songs remain, `localStorage` is cleared entirely.

---

## ▶️ How to Run

1. Clone or download the project.
2. Open `manipulación_dom.html` in your browser (or serve it with a local server such as Live Server in VS Code).
3. Make sure the file paths for `app.js` and `playlist.css` match your local directory structure (currently set to `/WEEK3/`).

> **Note:** If opening the file directly from the filesystem, update the script and stylesheet `src`/`href` paths from `/WEEK3/...` to relative paths like `./app.js` and `./playlist.css`.

---

## 🎨 Design Highlights

- Custom fonts: **Ubuntu** and **Barlow Condensed** (loaded locally via `@font-face`).
- Color palette: red `#f3140c`, green `#25e23e`, neutral gray `#a8a8a8`.
- Responsive-friendly layout using CSS Flexbox.
- Playlist container is hidden via `display: none` when empty and shown as `display: flex` when songs exist.

---

## 📚 Learning Goals

- Practice DOM manipulation using native JavaScript methods.
- Understand how `localStorage` stores and retrieves data between sessions.
- Build a full CRUD-like flow (Create, Read, Delete) without a backend.
- Work with dynamic rendering and event delegation patterns.

 > Developed for the Riwi JavaScript Module - Week 3.