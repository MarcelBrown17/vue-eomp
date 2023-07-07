<template>
    <body class="back-img">
     <div class="row row-cols-1 row-cols-md-3 g-4 h-100">
        <div class="col mb-4 px-5"  v-for="educations in educations"
          :key="educations.id">
          <div class="card bg-secondary text-dark h-100 ">
            <div class="card-body">
                <h2>School Attended:</h2>
              <h5 class="card-title">{{ educations.school }}</h5>
              <h2>Highest Degree:</h2>
              <p class="card-text">{{ educations.highestDegree }}</p>
              <h2>Year matriculated</h2>
              <p class="card-text">{{ educations.yearMatriculated }}</p>
              <h2>Major Subjects</h2>
              <p class="card-text">{{ educations.subject1 }}</p>
              <p class="card-text">{{ educations.subject2 }}</p>
              <p class="card-text">{{ educations.subject3 }}</p>

            </div>
          </div>
        </div>
      </div>
    </body>
  </template>
  <script>
  export default {
    computed: {
      educations() {
        return this.$store.state.educations;
      },
    },
    mounted() {
      this.$store.dispatch("fetchEducation");
    },
  };
  </script>

  <style scoped>

</style>
  
  
  
  
  
  
  
  
  
  