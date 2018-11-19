<template>
	<div class="container">
		<div></div>
		<div class="message-wapper" ref="message_div">
			<div class="meaagse-item" v-for="item in list">{{item.name}}</div>
		</div>
		<div>{{aaaa}}</div>
		<div class="btn" @click="addItem" data-text="更多内容" v-changeColor>{{bbb}}</div>
		<div class="btn aa" @click="addMoreItem"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				num:0,
				aaaa:'更多内容',
				bbb:'更多内容'
			}
		},
		mounted() {
			//模拟请求数据
			this.aaaa = this.$getTime(new Date().getTime(),'-',true);
			let data = [{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
				{
					name: '啊哈哈啊',
					desc: '啊哈哈啊哈哈哈哈哈'
				},
			];
			//模拟ajax异步请求
			var getAjax = result => {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve(result);
					}, 500)
				})
			}
			getAjax(data).then(data => {
				if(data.length > 0) {
					for(let index = 0; index < data.length; index++) {
						this.list.push(data[index]);
					}
				}

			}).then(() => {
				this.$refs.message_div.scrollTop = this.$refs.message_div.scrollHeight;
			})
		},

		methods: {
			addItem(){
				this.bbb = 'haahah';
//				this.num++;
//				let new_data = {
//					name: '添加第'+this.num+'条数据',
//					desc: '啊哈哈啊哈哈哈哈哈'
//				};
//				this.list.push(new_data);
//				//添加一条数据更新一下message_div滚动的高度
//				
//				setTimeout(() => {//保证message_div的scrollHeight更新之后在把其赋值给scrollTop
//					this.$refs.message_div.scrollTop = this.$refs.message_div.scrollHeight;
//				}, 0)
				
			},
			addMoreItem(){
				let data = [
					{
						name: '啊哈哈啊1',
						desc: '啊哈哈啊哈哈哈哈哈'
					},
					{
						name: '啊哈哈啊2',
						desc: '啊哈哈啊哈哈哈哈哈'
					},
					{
						name: '啊哈哈啊3',
						desc: '啊哈哈啊哈哈哈哈哈'
					},
				]
				//模拟ajax异步请求
			var getAjax = result => {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve(result);
					}, 500)
				})
			}
			getAjax(data).then(data => {
				if(data.length > 0) {
					for(let index = 0; index < data.length; index++) {
						this.list.unshift(data[index]);
					}
				}

			})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.message-wapper {
		width: 70%;
		height: 50%;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		overflow: auto;
		border: 1px solid #999;
	}
	
	.meaagse-item {
		line-height: 32px;
		font-size: 22px;
	}
	.btn{
		width:50%;
		height:50px;
		background-color: deepskyblue;
		text-align: center;
		line-height: 50px;
		font-size:30px;
		position: fixed;
		left: 25%;
		bottom:50px;
	}
	.aa{
	left: 25%;
	top:50px;
	}
</style>