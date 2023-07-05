<template>
  <router-link :to="{ name: 'Skills', params: { id: skills.id } }">
    <div class="row">
      <div class="col" v-for="skills in data" :key="skills.ID">
        <div class="card" style="width: 18rem">
          <img :src="skills.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h1>{{ skills.name }}</h1>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch(
        ""
      );
      let parsedData = await res.json();
      this.data = parsedData.skills;
    },
  },
  mounted() {
    this.fetchData;
  },
};


</script>

<style scoped>

</style>
