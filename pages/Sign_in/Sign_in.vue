<template>
	<view class="content">
		<image class="logo" src="/static//logo_only.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="name_pwd">
			<input class="input" placeholder="UserName*" />
			<input class="input" type="password" placeholder="PassWord*" />
		</view>
		<view class="btn_signin">
			<button @click="go_sign_in()"form-type="submit">Sign in</button>
		</view>
		<view class="text-area">
			<text class="description">{{description_0}}</text>
		</view>
		<view class="btn_signup">	
			<button @click="go_sign_up()">Sign up</button>
		</view>
		<view class="text-area">
			<text class="description">{{description_1}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'BuilditPayIt',
				description_0:" OR Don't have an account? ",
				description_1:" By proceeding you also agree to the Terms of Service and Privacy Policy ",
			}
		},
		onLoad() {

		},
		methods: {
			go_sign_up(){
				uni.navigateTo({
					url: '/pages/Sign_up/Sign_up'
				});
			},
			go_sign_in(){
				uni.switchTab({
					url:'/pages/Home/Home'
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
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
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
	.description{
		font-size: 30rpx;
		text-align: center;
		margin-left: 30rpx;
		margin-right: 30rpx;
		color: #ffffff;
		font-family: Arial, Helvetica, sans-serif;
	}
	.name_pwd {
		margin-top: 150rpx;
	} 
	.input{
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		padding: 20rpx;
		width: 650rpx;
		background-color: #555555;
		color: #ffffff;
	}
	button {
		margin-top: 30rpx;
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
