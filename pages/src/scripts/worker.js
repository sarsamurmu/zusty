import { Workbox } from 'workbox-window';

const registerWorker = (path) => {
  var toasts = new DOMParser().parseFromString(`
    <div class="worker-toast" ready>
      <div>
        <span class="zust-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"></path>
          </svg>
        </span>
        <span>Zusty Pages are Now Available offline.</span></div>
    </div>
    <div class="worker-toast" update>
      <div>
        <span class="zust-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path fill="currentColor" d="M12 6v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79c-.31-.31-.85-.09-.85.36V4c-4.42 0-8 3.58-8 8 0 1.04.2 2.04.57 2.95.27.67 1.13.85 1.64.34.27-.27.38-.68.23-1.04C6.15 13.56 6 12.79 6 12c0-3.31 2.69-6 6-6zm5.79 2.71c-.27.27-.38.69-.23 1.04.28.7.44 1.46.44 2.25 0 3.31-2.69 6-6 6v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.31.31.85.09.85-.35V20c4.42 0 8-3.58 8-8 0-1.04-.2-2.04-.57-2.95-.27-.67-1.13-.85-1.64-.34z"></path>
          </svg>
        </span>
        <span>New or Updated content available. &nbsp;Refreshing...</span></div>
    </div>
  `, 'text/html');

  toasts.body.childNodes.forEach((node) => {
    document.body.appendChild(node);
  });

  if ('serviceWorker' in navigator) {
    const worker = new Workbox(path);

    worker.addEventListener('installed', (event) => {
      var toast = document.querySelector('.worker-toast[ready]');
      if (event.isUpdate) toast = document.querySelector('.worker-toast[update]');

      toast.classList.add('visible');
      setTimeout(() => {
        toast.classList.remove('visible');

        if (event.isUpdate) window.location.reload();
      }, 5000);
    });

    worker.register();
  }
}
window.registerWorker = registerWorker;
