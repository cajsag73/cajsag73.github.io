const CACHE='c-kortet-v7';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
// Hämta alltid senaste versionen när nätet finns, annars den sparade.
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request).then(r=>{
    if(r&&r.ok&&(r.type==='basic'||r.type==='cors')){const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c))}
    return r}).catch(()=>caches.match(e.request).then(m=>m||caches.match('./index.html'))))});
