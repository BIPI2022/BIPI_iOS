<template>
	<view class="content">
		<image class="logo" src="/static///user_sign_up.png"></image>

		<view class="name_pwd">
			<input class="input" type="digit" placeholder="White Card Number" />
			<input class="input" type="digit" placeholder="Certification ID" />
			<input class="input" type="text" placeholder="Company" />
			<input class="input" type="digit" placeholder="Australian Business Number" />
			<input class="input" type="password" placeholder="PassWord" />
			<input class="input" type="password" placeholder="Confirm PassWord" />
		</view>


		<view class="btn">
			<view class="btn_Borrower">
				<button @click="Next()">Next</button>
			</view>
			<view class="text-area">
				<text class="description_bottom">{{description_0}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'BuilditPayIt',
				description_0: "Already have an account? Sign in",
			}
		},
		onLoad() {

		},
		methods: {
			Next() {
				uni.navigateTo({
					url: '/pages/Sign_up/Builder_Sign_up_2'
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
	
	.name_pwd {
		margin-top: 0rpx;
	} 
	
	.input{
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		padding: 20rpx;
		width: 650rpx;
		background-color: #555555;
		color: #ffffff;
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
