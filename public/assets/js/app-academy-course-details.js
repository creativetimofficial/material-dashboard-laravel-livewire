// Academy course detail

'use strict';

(function () {
  // video
  const videoPlayer = new Plyr('#plyr-video-player');
  document.getElementsByClassName('plyr')[0].style.borderRadius = '7px';
  document.getElementsByClassName('plyr__poster')[0].style.display = 'none';

  // content sticky

  const htmlElement = document.getElementsByTagName('html')[0];
  const stick = document.querySelector('.stick-top');

  function TopSticky() {
    if (htmlElement.classList.contains('layout-navbar-fixed')) {
      stick.classList.add('course-content-fixed');
    } else {
      stick.classList.remove('course-content-fixed');
    }
  }

  window.addEventListener('scroll', TopSticky);
})();
