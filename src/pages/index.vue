<template>
    <div class="container">
        <div class="page-title ui-border-b">滑动组件</div>
       
        <ul class="list-wrapper">
        	<li class="list-item" v-for="(item,index) in list" :key="index">
        		 <flySliderLeft :index="1" @deleteItem="deleteItem(item.desc)" 
        		 	:btnStyle="{
        		 			backgroundColor:'red'
        		 		}"
        		 	title="删除">
			           <div style="width: 100%;background: #fff;">
			           		<div class="desc">{{item.desc}}</div>
              				<div class="desc">{{item.desc}}</div>
              				<div class="desc">{{item.desc}}</div>
              				<div class="desc">{{item.desc}}</div>
              				<div class="desc">{{item.num|addZero}}</div>
              				
			           </div>
			    </flySliderLeft>
         </li>
        </ul>
    </div>
</template>

<script>
import swipe from './common/cell-swipe/cell-swipe.vue';

    export default{
		name: 'index',
		components: { 
			swipe,
		},
		data () {
			return{
				sthGiveChild: '给你100块',
				foo:0,
				list:[
						{name:'啊哈哈啊',desc:'啊哈哈啊哈哈哈哈哈',num:10},
						{name:'啊哈哈啊',desc:'啊哈哈啊哈哈哈哈哈',num:10},
						{name:'啊哈哈啊',desc:'啊哈哈啊哈哈哈哈哈',num:10},
						{name:'啊哈哈啊',desc:'啊哈哈啊哈哈哈哈哈',num:10},
						{name:'啊哈哈啊',desc:'啊哈哈啊哈哈哈哈哈',num:10},
						{name:'啊哈哈啊',desc:'啊哈哈啊哈哈哈哈哈',num:10},
						{name:'啊哈哈啊',desc:'啊哈哈啊哈哈哈哈哈',num:10},
						{name:'啊哈哈啊',desc:'啊哈哈啊哈哈哈哈哈',num:10},
						{name:'啊哈哈啊',desc:'啊哈哈啊哈哈哈哈哈',num:10},
				]
			}
		},
		watch:{
			list:{
			  handler(newList, oldList) {
			   console.log(newList.length)
			  },
			  // 代表在wacth里声明了list这个方法之后立即先去执行handler方法
			  immediate: true
			 }
		},
		beforeCreate(){
			console.log('beforeCreate:'+this)
		},
		created(){
			console.log('created:'+this)
		},
		mounted(){
			console.log('mounted:'+this)
		},
		beforeUpdate(){
			console.log('beforeUpdate-index:'+this)
		},
		updated(){
			console.log('updated-index:'+this)
		},
		beforeDestroy(){
			console.log('beforeDestroy-index:'+this)
		},
		destroyed(){
			console.log('destroyed-index:'+this)
		},
		methods : {
			deleteItem(str){
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
    .list-item{
    	width:100%;
        position: relative;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
    }
    .list-item[data-type="0"]{
        transform: translate3d(0,0,0);
    }
    .list-item[data-type="1"]{
        transform: translate3d(-2rem,0,0);
    }
  
    .ownerList .list-content{
    	width:100%;
    	padding:10px 0;
    }
   .left{
   		margin-right:16px;
   }
   .right>div{
   		margin: 6px 0;
   }
</style>