export const sleep = {
  allow: function() {
    if ('wakeLock' in navigator) {
        this._wakeLock.release();
        this._wakeLock = null;
    } else {
        // eslint-disable-next-line no-console
        console.log('Screen Wake Lock API not supported');
    }
  },
  prevent: function() {
    if ('wakeLock' in navigator) {
        // Function that attempts to request a screen wake lock.
        const requestWakeLock = () => {
            try {
                this._wakeLock = navigator.wakeLock.request();
                this._wakeLock.addEventListener('release', () => {
                console.log('Screen Wake Lock released:', this._wakeLock.released);
                });
                console.log('Screen Wake Lock released:', this._wakeLock.released);
            } catch (err) {
                console.error(`${err.name}, ${err.message}`);
            }
        };

        // Request a screen wake lock
        requestWakeLock();
    } else {
        // eslint-disable-next-line no-console
        console.log('Screen Wake Lock API not supported');
    }
  },
  _wakeLock: null,
}
