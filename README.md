# A Little Book About You

A small, static, mobile-first birthday "book". Plain HTML, CSS and vanilla JavaScript — no build step, no dependencies (only Google Fonts).

```
index.html          the pages of the book
css/style.css       all styling
js/script.js        CONFIG (your words) + the behaviour
assets/photos/      your photographs
assets/music/       optional mp3s
assets/icons/       favicon
```

## 1. Make it yours

Open `js/script.js`. Everything personal lives in the `CONFIG` object at the very top:

| Key | What it controls |
| --- | --- |
| `herName`, `yourName`, `birthday`, `age` | Cover, epilogue and last page ("Chapter 25") |
| `intro` | Chapter I — the opening line, a paragraph, 2–3 photos |
| `things` | Chapter II — the six keepsakes and the note each one reveals |
| `eras` | Chapter III — title, description, memory, optional photo |
| `songs` | Chapter IV — the playlist |
| `memories` | Chapter V — polaroids: photo, handwritten label, note |
| `personalMessages` | Chapter VI — sentences revealed one at a time |
| `secret` | The hidden page |
| `finalMessage` | The last page |

Replace anything in `[SQUARE BRACKETS]`. You can add or remove items from any list.

### Photos

Drop files into `assets/photos/` using the names already in `CONFIG` (`intro-01.jpg`, `memory-01.jpg`, …) or change the paths. Any photo that's missing shows a tidy placeholder, never a broken image.

Resize photos to roughly **1200px on the long edge** and keep them under ~300 KB each so the site stays quick on mobile data. Polaroids are cropped square; the first intro photo is 4:5, the other two 3:4.

### Music

Nothing ever autoplays. If `assets/music/song-01.mp3` (etc.) exists, tapping play plays it. If it doesn't, the player still works — it just keeps time silently. Each song can also have:

- `art` — a cover image
- `link` — a Spotify / YouTube URL, shown as "listen to the real thing ↗"
- `secret: true` — hides the title in the track list until she taps it

> A public GitHub Pages site is visible to anyone with the link, so don't upload commercial songs you don't have the rights to share. Use the `link` field instead.

### The secret

The middle star of the little ornament at the end of Chapter V is purple and gently pulses. Tapping it opens the secret page.

## 2. Preview it

Double-click `index.html`. That's all. (Or run `python3 -m http.server` in this folder and open <http://localhost:8000>.)

## 3. Deploy to GitHub Pages

1. Create a new repository on <https://github.com/new> (e.g. `a-little-book`). Public is required for Pages on a free account.
2. In this folder:

   ```bash
   git init
   git add .
   git commit -m "A little book"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/a-little-book.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment**. Set **Source** to *Deploy from a branch*, **Branch** to `main` and folder `/ (root)`, then **Save**.
4. Wait a minute. The site will be live at
   `https://YOUR-USERNAME.github.io/a-little-book/`

All paths are relative, so it works from that sub-path with no changes. To update, edit, commit and push again.

## Notes

- Designed at 390px wide and checked at 360 / 390 / 430. On desktop the same book column is centred.
- Honours `prefers-reduced-motion`: animations are switched off and everything is simply visible.
- The page asks search engines not to index it (`noindex`), but the URL itself isn't private.
