
window.addEventListener('load', function () {
	new Vue({
		el: "#app",
		data: {
			list:[],
			curr:""
		},
		methods:{
			addtolist(){
				this.list.unshift(this.curr);
				this.curr="";
			}
		}

	})
})