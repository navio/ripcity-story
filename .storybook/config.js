import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
setOptions({
name:"RipCity"
});

const req = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

//function loadStories() {
 // require('../stories/index.js');
  // You can require as many stories as you need.
//}

configure(loadStories, module);
