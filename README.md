# X Video Curator — Share-Target Version

Single encrypted collection. No “create new” option.

## How it works
- Unlock with your master password (first unlock with a new password creates an empty collection).
- **Primary input**: Accept shared X video links.
  - On Android / Chrome: Install as PWA → share from X → choose this app.
  - On iOS: Copy the link from X, open the app, tap **Paste from Clipboard**, then Add.
- Manual paste still works.
- Embed, edit, delete, search, and export encrypted backups.

## iOS Note
iOS does **not** support the Web Share Target API (as of 2026). The app appears in the share sheet only on Android/Chrome after being installed as a PWA. On iPhone use the clipboard paste button or open with a `?url=` parameter via Shortcuts.

## Files
- `x-video-curator.html` — the app
- `manifest.webmanifest` — for PWA install + share target (place next to the HTML when hosting)

Host both files on any HTTPS static host (Netlify Drop, GitHub Pages, etc.) for the best share-target experience.
