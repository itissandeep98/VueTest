
window.addEventListener('load', function () {
	new Vue({
		el: "#app",
		data: {
			isSafe: true,
		},
		methods: {
			demo() {
				alert("link clicked")
			}
		}
	})
})