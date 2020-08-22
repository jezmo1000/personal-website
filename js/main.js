window.onload = () => {
    'use strict';
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('./serviceWorker.js');
    }

    let divInstall = document.querySelector('#installBanner');

    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (event) => {
      console.log('👍', 'beforeinstallprompt', event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container
      divInstall.classList.toggle('hidden', false);
    });


    // window.addEventListener('DOMContentLoaded', () => {
    //   let displayMode = 'browser tab';
    //   if (navigator.standalone) {
    //     displayMode = 'standalone-ios';
    //   }
    //   if (window.matchMedia('(display-mode: standalone)').matches) {
    //     displayMode = 'standalone';
    //   }
    //   // Log launch display mode to analytics
    //   console.log('DISPLAY_MODE_LAUNCH:', displayMode);
    // });

  }

