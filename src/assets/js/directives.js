import Vuex from '../../store/index.js'
const changeColor = {
	bind:(el, binding, vnode) => {
		console.log('bind')
	},
	inserted:(el, binding, vnode) => {
		console.log('inserted')
		let innerHTML = el.innerHTML;
		if(el.dataset.text==innerHTML){
			el.style.color='#ccc';
		}else{
			el.style.color='#333';
		}
	},
	update:(el, binding, vnode) => {
		
	},
	componentUpdated:(el, binding, vnode) => {
		console.log('componentUpdated')
		console.log('update')
		let innerHTML = el.innerHTML;
		console.log(innerHTML)
		
		if(el.dataset.text==innerHTML){
			el.style.color='#ccc';
		}else{
			el.style.color='#333';
		}
	},
	unbind:(el, binding, vnode) => {
		console.log('unbind')
	},
}
const is_click = {
	bind:(el, binding, vnode) => {
		console.log('bind')
	},
	inserted:(el, binding, vnode) => {
		console.log('inserted')
		let value = el.value,_text = el.dataset.text;
		if(value!=''){
			if(value==_text){
				Vuex.commit('change_click', false);
			}else{
				Vuex.commit('change_click', true);
			}
			
		}
	},
	update:(el, binding, vnode) => {
		
	},
	componentUpdated:(el, binding, vnode) => {
		console.log('componentUpdated')
		console.log('update')
		let value = el.value,_text = el.dataset.text;
		if(value!=''){
			if(value==_text){
				Vuex.commit('change_click', false);
			}else{
				Vuex.commit('change_click', true);
			}
			
		}
	},
	unbind:(el, binding, vnode) => {
		console.log('unbind')
	},
}
export default {
    changeColor,
    is_click
}