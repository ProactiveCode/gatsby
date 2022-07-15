import "./src/scss/style.scss"

export const shouldUpdateScroll = () => { return false; };

export const onServiceWorkerUpdateReady = () => window.location.reload();