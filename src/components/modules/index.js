import Vue from 'vue';
import flySliderLeft from './leftSlider/index.js';
const components = [
    flySliderLeft
];
const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

install(Vue);

export default {
  version: '0.0.1',
  flySliderLeft,
}