<template>
	<view class="content">
		<image class="logo" src="/static///user_sign_up.png"></image>
		<view class="text-area">
			<text class="title">{{description_0}}</text>
		</view>
		<view class="text-area">
			<text class="description_top">{{description_1}}</text>
		</view>

		<view class="uni-list">
			<checkbox-group @change="checkboxChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
					<view>
						<checkbox :value="item.value" :checked="item.checked" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</checkbox-group>
		</view>

		<view class="btn">
			<view class="btn_Borrower">
				<button @click="sign_up()">Sign up</button>
			</view>
			<view class="text-area">
				<text class="description_bottom">{{description_2}}</text>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'BuilditPayIt',
				description_0: " Choose your skills ",
				description_1: " Please check the skills you have. ",
				description_2: "Already have an account? Sign in",
				title: 'checkbox',
				items: [{
						value: 'Tiles',
						name: 'Tiles'
					},
					{
						value: 'Painting',
						name: 'Painting',
					},
					{
						value: 'Brick Layer',
						name: 'Brick Layer'
					},
					{
						value: 'Woodworking',
						name: 'Woodworking'
					},
					{
						value: 'Electrion',
						name: 'Electrion'
					},
					{
						value: 'Porter',
						name: 'Porter'
					},
					{
						value: 'Other',
						name: 'Other'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			
			sign_up(){
				uni.navigateTo({
					url:'/pages/Sign_up/Sign_Up_Successful'
				})
			},
			checkboxChange: function(e) {
				var items = this.items,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 20rpx;
	}

	.uni-list{
		max-width: 95%;
		margin-top: 30rpx;
		background-color: #555555;
		color: #ffffff;
		font-family: Arial, Helvetica, sans-serif;
	}
	
	.uni-list-cell-pd{
		justify-content: space-between;
	}
		
	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 40rpx;
		margin-left: auto;
		margin-right: auto;
		color: #ffffff;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}

	.description_top {
		font-size: 30rpx;
		text-align: center;
		margin-top: 10rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		color: #8d8d8d;
		font-family: Arial, Helvetica, sans-serif;
	}

	.description_bottom {
		font-size: 30rpx;
		text-align: center;
		margin-top: 50rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		margin-bottom: 30rpx;
		color: #8d8d8d;
		font-family: Arial, Helvetica, sans-serif;
	}

	.btn {
		margin-top: 50rpx;
	}

	button {
		margin-top: 0rpx;
		margin-bottom: 30rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		width: 650rpx;
		border: 1rpx;
		border-radius: 50rpx;
		color: #ffffff;
		font-family: Arial, Helvetica, sans-serif;
		background-color:#f28500;
	}
	
	
</style>
