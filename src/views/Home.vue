<template>
	<div class="home">
		<h1 class="text-center"><span class="fas fa-list-ul"/> Todo or !Todo</h1>
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-6 text-center">
					<br/><br/>
					<input type="text" v-model="inp.text" placeholder="Enter Your Task"/>
					<br/><br/>
					<b-calendar v-model="inp.date" :date-disabled-fn="dateDisabled"/>
					<br/><br/>
					<b-button pill variant="secondary" @click="addToList" >
						Add to List <span class="fas fa-plus"/>
					</b-button>
				</div>
				<div class="col-12 col-md-6">
					<b-tabs content-class="mt-3">
						<b-tab title="Active" >
							<ul class="">
								<li v-for="(el,ind) in activeList" :key="ind">
									<b-button pill variant="info" @click="markCompleted(ind)" v-b-popover.hover.left="'Mark As Completed'">
										<span class="far fa-check-circle"/>
									</b-button>
									<p  v-show="isedit!=ind" @click="isedit=ind;temp=el">{{el.text}}  {{el.date}}</p>
									<input type="text" v-model="temp" v-show="ind===isedit" @keyup.enter="update(ind)" />
								</li>
							</ul>
						</b-tab>
						<b-tab title="Completed"> 
							<ul class="">
								<li v-for="(el,ind) in completedList" :key="ind">
									<b-button pill variant="danger" @click="deleteval(ind)" v-b-popover.hover.left="'Delete Permanently'">
										<span class="far fa-times-circle"/>
									</b-button>
									<p>{{el.text}}  {{el.date}}</p>
								</li>
							</ul>
						</b-tab>
					</b-tabs>					
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
			inp:{
				text:"",
				date:""
			},
			activeList:[],
			completedList:[],
			isedit:-1,
			temp:"",
			date:""
		}
	},
	methods:{
		addToList(){
			this.inp.date=new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(this.inp.date)))
			this.activeList.push(this.inp);
			this.inp=""
		},
		markCompleted(i){
			this.completedList.push(this.activeList[i])
			this.activeList.splice(i,1)
		},
		update(ind){
			this.activeList[ind]=this.temp
			this.isedit=-1
			this.temp=''
		},
		deleteval(i){
			this.completedList.splice(i,1)
		},
		dateDisabled(ymd, date) {
			const day = date.getDate()
			const d=new Date()
			return  day < d.getDate() && d.getMonth()>=date.getMonth()
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