<template>
       
            <router-link :to="{ name: 'Testimonial', params: { id: testimonia.id } }">
    <div class="row">
      <div class="col" v-for="testimonial in data" :key="testimonial.ID">
        <div class="col mb-4">
              <div class="card bg-dark text-light">
                <img src="{{testimonial.imgSrc}}" loading="lazy" class="card-img-top" alt="Connor">
                <div class="card-body">
                  <h5 class="card-title">testimonial.name</h5>
                  <p class="card-text">testimonial.description</p>
                </div>
              </div>
            </div>
      </div>
    </div>
</router-link>
</template>

<script>
export default{
    data(){
            return{
                data:[],
            }
        },
        methods:{
            async fetchData(){
                const res = await fetch ('')
                let parsedData = await res.json()
                this.data = parsedData.testimonial;
            },
        },
        mounted(){
                this.fetchData();
            },
    };

</script>

<style>

</style>