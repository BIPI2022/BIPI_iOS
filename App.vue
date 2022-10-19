<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import '/common/uni.css';
	/*每个页面公共css */
	page{
		background-color: #383838;
	}
	button
	{
		/* background-color: #f28500; */
	}
</style>
