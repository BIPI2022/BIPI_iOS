<template>
	<view class="content">
		<image class="logo" src="/static///user_sign_up.png"></image>
		<view class="text-area">
			<text class="title">{{description_0}}</text>
		</view>
		<view class="text-area">
			<text class="description_top">{{description_1}}</text>
		</view>
		<view class="btn">
			<view class="btn_Borrower">
				<button @click="go_borrower_sign_up()">Borrower</button>
			</view>
			<view class="btn_Builder">	
				<button @click="go_builder_sign_up()">Builder</button>
			</view>
			<view class="btn_Training">
				<button @click="go_training_sign_up()">Training</button>
			</view>
		</view>
		
		
		<view class="text-area">
			<text class="description_bottom">{{description_2}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'BuilditPayIt',
				description_0:" Choose your user type ",
				description_1:" What kind of user do you want to sign up for? ",
				description_2:"Already have an account? Sign in",
			}
		},
		onLoad() {

		},
		methods: {
			go_borrower_sign_up(){
				uni.navigateTo({
					url: '/pages/Sign_up/Borrower_Sign_up'
				});
			},
			go_builder_sign_up(){
				uni.navigateTo({
					url: '/pages/Sign_up/Builder_Sign_up_0'
				});
			},
			go_training_sign_up(){
				uni.navigateTo({
					url: '/pages/Sign_up/Training_Org_Sign_Up'
				});
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
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 20rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 50rpx;
		margin-left: auto;
		margin-right: auto;
		color: #ffffff;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
	.description_top{
		font-size: 30rpx;
		text-align: center;
		margin-top: 10rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		color: #8d8d8d;
		font-family: Arial, Helvetica, sans-serif;
	}
	
	.description_bottom{
		font-size: 30rpx;
		text-align: center;
		margin-top:250rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		margin-bottom: 30rpx;
		color: #8d8d8d;
		font-family: Arial, Helvetica, sans-serif;
	}
	
	.btn{
		margin-top: 150rpx;
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
