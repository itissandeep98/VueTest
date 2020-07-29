<template>
	<div class="home">
		<h1 class="text-center"> Todo or !Todo</h1>
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-6">
					<br/><br/>
					<input type="text" v-model="inp"/>
					<br/><br/>
					<b-button pill variant="secondary" @click="addToList" >Add to List</b-button>
				</div>
				<div class="col-12 col-md-6">
					<ul>
						<li v-for="el in list" :key="el"> {{el}} </li>
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