# cajsag73.github.io

Domänroten för appen [Dålig täckning](https://github.com/cajsag73/storsandaren).

- `.well-known/assetlinks.json` bekräftar för Android att webbplatsen tillhör appen, så att adressfältet inte visas. Fingeravtrycken fylls i när de finns (se `storsandaren/domanrot/README.md`).
- `index.html` skickar besökare vidare till appen.
- `.nojekyll` gör att GitHub Pages publicerar mappen `.well-known`.
