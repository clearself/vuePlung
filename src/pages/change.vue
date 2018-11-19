<template>
	<div class="container">
		<div class="page-title ui-border-b">动态组件组件</div>
		<dynamic-form 
			 v-for="item in formConfig.formItemList"
			 :key="item.key"
			 v-if="value[item.key]!==undefined"
			 :item="item"
			 :value="value[item.key]"
			 @input="handleInput($event, item.key)"
			 />
	</div>
</template>

<script>
	import dynamicForm from './common/from_item.vue';
	export default {
		name: 'index',
		components: {
			dynamicForm
		},
		data() {
			return {
				formConfig:{
					"inline": true,
					"labelPosition": "right",
					"labelWidth": "",
					"size": "small",
					"statusIcon": true,
					"formItemList": [{
							"type": "input",
							"label": "姓名",
							"disable": false,
							"readonly": false,
							"value": "",
							"placeholder": "请输入姓名",
							"rules": [],
							"key": "name",
							"subtype": "text"
						},
						{
							"type": "radio",
							"label": "性别",
							"value": "",
							"button": false,
							"border": true,
							"rules": [],
							"key": "gender",
							"options": [{
									"value": "1",
									"label": "男",
									"disabled": false
								},
								{
									"value": "0",
									"label": "女",
									"disabled": false
								}
							]
						}
					]
				}
			}
		},
		methods: {
				handleInput(val, key) {
				 // 这里element-ui没有上报event，直接就是value了
				 this.$emit('input', { ...this.value, [key]: val })
				 },
			 	setDefaultValue() {
			 		
			 	}
		}
	}
</script>

<style lang="scss" scoped>
	.page-title {
		text-align: center;
		font-size: 17px;
		padding: 10px 15px;
		position: relative;
	}
</style>