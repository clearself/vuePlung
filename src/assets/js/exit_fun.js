import {
	getTime,
	get_deviceInfo,
} from './public_fun.js'

export default {
	version: '0.0.1',
	install: function(Vue) {
		Vue.prototype.$getTime = getTime;
		Vue.prototype.$get_deviceInfo = get_deviceInfo;
	},
}