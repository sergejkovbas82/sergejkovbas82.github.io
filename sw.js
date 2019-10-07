self.addEventListener('install', event => {
    console.log('sw installed');
    self.registration.showNotification('sw installed', {});
});
self.addEventListener('activate', event => {
    console.log('sw activate');
    self.registration.showNotification('sw activate', {});
});
self.addEventListener('fetch', event => {
    console.log('sw fetch');
    self.registration.showNotification('sw fetch', {});
});