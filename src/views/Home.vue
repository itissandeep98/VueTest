<template>
	<div class="home">
		<h1 class="text-center"><span class="fas fa-list-ul"/> Todo or !Todo</h1>
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-6 text-center">
					<br/><br/>
					<input type="text" v-model="inp" placeholder="Enter Your Task" @keyup.enter="addToList"/>
					<br/><br/>
					<b-button pill variant="secondary" @click="addToList" >
						Add to List <span class="fas fa-plus"/>
					</b-button>
				</div>
				<div class="col-12 col-md-6">
					<ul class="">
						<li v-for="(el,ind) in list" :key="ind">
							<b-button pill variant="danger" @click="deleteval(ind)">
								<span class="far fa-hand-scissors"/>
							</b-button>
							<p  v-show="isedit!=ind" @click="isedit=ind;temp=el">{{el}}</p>
							<input type="text" v-model="temp" v-show="ind===isedit" @keyup.enter="update(ind)" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	components: {
	},
	data(){
		return {
			inp:"",
			list:[],
			isedit:-1,
			temp:""
		}
	},
	methods:{
		addToList(){
			this.list.push(this.inp);
			this.inp=""
		},
		deleteval(i){
			this.list.splice(i,1)
		},
		update(ind){
			this.list[ind]=this.temp
			this.isedit=-1
			this.temp=''
		}
		
	}
}
</script>

<style scoped>
h1{
	background-color: #3fada8;
	color: white;
    padding: 10px;
    font-family: "Times New Roman", Times, serif;
}
p{
	display: inline;
	margin:10px
}
li{
	margin: 10px;
}
li input{
	margin: 10px;
}
</style>