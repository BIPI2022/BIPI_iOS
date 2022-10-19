<template>
	<view>
		<view class="content">
			<view class="bg_image"></view>
			<image class="logo" src='../../my_white.png'></image>
		</view>
		
		<view class="welcome">
			<view class="text-area">
				<text class="description_L">{{user_name}}</text>
				<text class="description_R">uid:{{uid}}</text>
			</view>


		</view>
		<view class="content">
			<view class="btn">
				<view class="btn_label">
					<button type="default" @click="go_My_Profile()">My profile</button>
				</view>
				<view class="btn_label">	
					<button type="default" @click="go_Change_Password()">Change Password</button>
				</view>
				<view class="btn_label">
					<button type="default" @click="go_Feedback()">Feedback</button>
				</view>
			</view>
			
			<view class="btn_Sign_out">
				<button @click="go_Sign_out()">Sign out</button>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'BuilditPayIt',
				time: "morning",
				user_name: "Test User",
				uid: " 123456 ",
			}
		},
		methods: {
			go_Sign_out(){
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
		margin-top: -350rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 20rpx;
	}

	.welcome {
		z-index: 1;
		/*置于上层*/
		margin-top: 50rpx;
	}


	.text-area {
		margin-left: 30rpx;
		margin-right: 30rpx;
		display: flex;
		justify-content: space-between;
		color: #ffffff;
		font-family: Arial, Helvetica, sans-serif;

	}

	.bg_image {
		background-color: #f28500;
		background-size: cover;
		height: 500rpx;
		width: 100%;
	}
	
	.btn {
		margin-top: 100rpx;
	}
	
	
	.btn_Sign_out button{
		margin-top: 100rpx;
		margin-bottom: 30rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		width: 650rpx;
		border: 1rpx;
		border-radius: 50rpx;
		background-color:#f28500;
		color: #ffffff;
		font-family: Arial, Helvetica, sans-serif;

	}
	
	.btn_label button{
		margin-top: 0rpx;
		margin-bottom: 10rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		width: 750rpx;
		border: 1rpx;
		background-color: #555555;
		text-align: left;
		/* border-radius: 50rpx; */
		color: #ffffff;
		font-family: Arial, Helvetica, sans-serif;
	}
	
</style>
