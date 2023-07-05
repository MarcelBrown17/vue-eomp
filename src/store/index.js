import { createStore } from 'vuex'
const dataURL = ('https://marcelbrown17.github.io/vue_eomp_json/index.json')
export default createStore({
  state: {
    skills:null,
    projects:null,
    education:null,
    testimonials:null,
  },
  getters: {
  },
  mutations: {
    setTestimonial(state,testimonials){
      state.testimonials = testimonials
    },
    setProject(state,projects){
      state.projects = projects
    },
    setEducation(state,educations){
      state.educations = educations
    },
    setSkill(state,skills){
      state.skills = skills
    }
  },
  actions: {
    async fetchTestimonial(context){
      try{
        let res = await fetch(dataURL)
        let {testimonials} = await res.json()
        context.commit('setTestimonial',testimonials)
      } catch (e){
        console.log(e.message);
      }
    },
    async fetchProject(context){
      try{
        let res = await fetch(dataURL)
        let {projects} = await res.json()
        context.commit('setProject',projects)
      } catch (e){
        console.log(e.message);
      }
    },
    async fetchSkill(context){
      try{
        let res = await fetch(dataURL)
        let {skills} = await res.json()
        context.commit('setSkill',skills)
      } catch (e){
        console.log(e.message);
      }
    },
    async fetchEducation(context){
      try{
        let res = await fetch(dataURL)
        let {educations} = await res.json()
        context.commit('setEducation',educations)
      } catch (e){
        console.log(e.message);
      }
    }





  }
  
  })
