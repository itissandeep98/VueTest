<template>
	<div class="home">
		<h1 class="text-center"> Todo or !Todo</h1>
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-6">
					<br/><br/>
					<input type="text" v-model="inp" placeholder="Enter Your Task" @keyup.enter="addToList"/>
					<br/><br/>
					<b-button pill variant="secondary" @click="addToList" >Add to List <span class="fas fa-plus"/></b-button>
				</div>
				<div class="col-12 col-md-6">
					<ul class="">
						<li v-for="el in list" :key="el"> {{el}} <b-button pill class="float-right" @click="deleteval(el)"><span class="far fa-hand-scissors"/></b-button> </li>
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
			list:[]
		}
	},
	methods:{
		addToList(){
			this.list.push(this.inp);
			this.inp=""
		},
		deleteval(el){
			this.list.splice(this.list.indexOf(el),1)
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
</style>