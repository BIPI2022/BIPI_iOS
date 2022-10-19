<template>
	<view class="content">
		<image class="logo" src="/static////success.png"></image>
		<view class="text-area">
			<text class="title">{{description_0}}</text>
		</view>
		<view class="text-area">
			<text class="description_top">{{description_1}}</text>
		</view>

		<view class="btn">
			<view class="btn_Borrower">
				<button @click="go_sign_in()">Go to Sign in</button>
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
				description_0: " Sign up was successful. ",
				description_1: " You can start using BIPI now. ",
				}
		},
		onLoad() {

		},
		methods: {
			go_sign_in(){
				uni.navigateTo({
					url:'/pages/Sign_in/Sign_in'
				})
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
		margin-top: 350rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 20rpx;
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
		margin-top: 350rpx;
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
