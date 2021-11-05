"use strict"

import throttle from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle(getCurrentTime), 1000);

 function getCurrentTime (data) {
    
   const currentTime = +data.seconds;
        
    console.log(currentTime);

localStorage.setItem(STORAGE_KEY, currentTime);
      
};

const saveCurrentTime = localStorage.getItem(STORAGE_KEY);

console.log(saveCurrentTime);

player.setCurrentTime(saveCurrentTime).then(function (seconds) {
    console.log(seconds);
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            
            break;
    }
});
