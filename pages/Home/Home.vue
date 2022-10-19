<template>
	<view>
		<view class="content">
			<view class="bg_image"></view>
		</view>
		<view class="welcome">
			<view class="text-area">
				<text class="description">Good {{time}}, {{user_name}}.</text>
			</view>
			<view class="text-area">
				<text class="description">{{description_0}}</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'BuilditPayIt',
				time:"morning",
				user_name: "Test User",
				description_0: " Here are your recent projects. ",
			}
		},
		methods: {

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

	.welcome{
		z-index: 1;/*置于上层*/
		margin-top: -100rpx;
	}
	
	.text-area {
		margin-left: 30rpx;
		display: flex;
		justify-content: left;
		color: #ffffff;
		font-family: Arial, Helvetica, sans-serif;
		
	}
	
	.bg_image {
		background-image: url('/static/home_background.jpeg');
		background-size:cover;
		
		height: 500rpx;
		width: 100%;
	}
	
	
</style>
