require('../scss/main.scss');

const micron = require('webkul-micron');

setTimeout(() => {
  micron.getEle('.landing.index h2').interaction('tada').duration('.45').timing('ease-in-out');
}, 500);

setTimeout(() => {
  micron.getEle('.landing:not(.index) h1').interaction('pop').duration('.45').timing('ease-in-out');
}, 500);
