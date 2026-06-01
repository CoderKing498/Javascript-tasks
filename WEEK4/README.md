# JSON-Playlist - Week 4

A dynamic playlist web app to manage songs with persistent local state and real-time synchronization with a local JSON server.

## Features

- **Full CRUD Operations:**
  - GET: Fetch all songs from the server or localStorage.
  - POST: Add new songs instantly.
  - PUT: Edit existing songs with real-time updates.
  - DELETE: Remove songs from both the server and local storage.
- **Persistent Storage:** Uses `localStorage` as a fallback to ensure data is never lost, even if the server is offline.
- **Manual Sync:** Dedicated "Sync List" button to manually refresh data from the server.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
- **Asynchronous Logic:** Implemented using `async/await` and `try...catch` for robust error handling.

## Technologies Used

- **HTML5:** Semantic structure.
- **CSS3:** Custom styling with Flexbox and Media Queries.
- **JavaScript (ES6+):** DOM manipulation and Fetch API.
- **JSON Server:** Local REST API simulation.

## Prerequisites

To run the server locally, you need to have [Node.js](https://nodejs.org/) installed.

## Installation & Setup

1. Navigate to the project directory:

```
cd semana4
```

2. Install JSON Server (if not already installed):

```
npm install -g json-server
```

3. Start the local server on port 3000:

```
npx json-server --watch db.json --port 3000
```

4. Launch the app: Open `index.html` in your favorite web browser.

## Project Structure

- `index.html`: The main user interface.
- `app.js`: Contains all the application logic and API calls.
- `playlist.css`: Modern and responsive styles.
- `db.json`: The local database for JSON Server.
- `img/`: Directory for icons and graphic assets.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/playlist` | Fetch all songs |
| `POST` | `/playlist` | Add a new song |
| `PUT` | `/playlist/:id` | Update a song by ID |
| `DELETE` | `/playlist/:id` | Delete a song by ID |

## Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| `≤ 768px` | Form stacks vertically; buttons go full-width |
| `≤ 425px` | Song content stacks; actions align to the right |
| `≤ 365px` | Actions center below song text |
| `≤ 330px` | Reduced font sizes and padding throughout |

## How it Works

The application uses a "Server as Source of Truth" strategy. When the page loads, it attempts to fetch data from the server. If successful, it updates the local memory and `localStorage`. If the server is unavailable, it gracefully falls back to the last saved data in `localStorage`.

## Week 3 vs Week 4

| Feature | Week 3 | Week 4 |
|---|---|---|
| Data storage | localStorage only | JSON Server (REST API) |
| CRUD operations | Create + Delete | Create + Read + Update + Delete |
| Async code | No | Yes (async/await + Fetch) |
| Offline support | Native | Fallback to localStorage |
| State management | Direct DOM updates | Centralized `updateState()` |

Developed as part of the Riwi JavaScript Module - Week 4.