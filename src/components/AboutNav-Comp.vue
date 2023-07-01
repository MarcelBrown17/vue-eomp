<template>
    <ul class="nav nav-tabs bg-black" id="myTab" role="tablist">
      
      <li class="nav-item">
          <router-link class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</router-link>
        </li>

      <li class="nav-item">
          <router-link class="nav-link" id="biography-tab" data-toggle="tab" href="#biography" role="tab" aria-controls="biography" aria-selected="false">Biography</router-link>
        </li>

      <li class="nav-item">
          <router-link class="nav-link" id="skills-tab" data-toggle="tab" href="#skills" role="tab" aria-controls="skills" aria-selected="true">Skills</router-link>
        </li>

      <li class="nav-item">
        <router-link class="nav-link" id="education-tab" data-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="false">Education</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" id="work-experience-tab" data-toggle="tab" href="#work-experience" role="tab" aria-controls="work-experience" aria-selected="false">Work Expeience</router-link>
      </li>
      
    </ul>
    <div class="tab-content" id="myTabContent">

      <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">Profile</div>

      <div class="tab-pane fade" id="biography" role="tabpanel" aria-labelledby="biography">Biography</div>

      <div class="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab">skills</div>


      <div class="tab-pane fade" id="education" role="tabpanel" aria-labelledby="education-tab">Education</div>

      <div class="tab-pane fade" id="work-experience" role="tabpanel" aria-labelledby="work-experience-tab">Work experience</div>

    </div>
</template>

<script>
export default{
    
}
</script>

<style>

</style>