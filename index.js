require('aframe');
require('aframe-audioanalyser-component');
require('aframe-particle-system-component');



var entity = document.querySelector('[sound]');

function playSound () {
  entity.components.sound.playSound();
}
