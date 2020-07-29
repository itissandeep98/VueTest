<template>
	<div class="home container">
		<h1 class="text-center"> Todo or !Todo</h1>
		<div class="container-fluid">
			<div class="row">
				<div class="col-6">
				<input type="text" v-model="inp"/>
				</div>
				<div class="col-6">
					<b-button pill variant="secondary" @click="log">Add to List</b-button>
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
			inp:""
		}
	},
	methods:{
		
	}
}
</script>

<style scoped>

</style>