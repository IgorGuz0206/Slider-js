
import SwipeCarousel from './swipe-carousel.js';

const carousel = new SwipeCarousel({
  interval: 1000, 
  // containerID: '#carousel', 
  isPlaying: true,
  slideID: '.item'
});

carousel.init();