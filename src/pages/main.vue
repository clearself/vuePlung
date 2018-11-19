<template>
    <div class="container">
        <div class="page-title ui-border-b">滑动组件</div>
        <div class="btn" :class="{'active':is_click}">按钮</div>
        <div class="list-wrapper">
        	<div v-for="(item,index) in list" :key="index"><input v-is_click type="text" placeholder="请填写内容" :data-text="item.pre_text" v-model="item.text"/></div>
         </div>
    </div>
</template>

<script>
	import swipe from './common/cell-swipe/cell-swipe.vue';
    export default{
		name: 'index',
		components: { swipe },
		data () {
			return{
				list:[
					{
						text:'',
						pre_text:''
					},
					{
						text:'',
						pre_text:''
					},
					{
						text:'',
						pre_text:''
					},
				]
				
			}
		},
		computed:{
			is_click(){
				if(this.list.every(item=>item.text=='')){
					return false;
				}else{
					return this.$store.state.is_click;
				}
				
			}
		},
		methods : {
			delete_device(str){
				alert(str)
			},
			add(str){
				alert(str)
			}
		}
    }
</script>

<style lang="scss" scoped>
    .page-title{
        text-align: center;
        font-size: 17px;
        padding: 10px 15px;
        position: relative;
    }
   
    .list-wrapper{
    	width:100%;
    	overflow: auto;
    }
   
	.btn{
		width:50px;
		height:30px;
		color:#ccc;
		border:1px solid #ccc;
	}
	.btn.active{
		color:dodgerblue;
		border:1px solid dodgerblue;
	}
</style>