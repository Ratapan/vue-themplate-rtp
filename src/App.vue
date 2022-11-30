<template>
  <div class="app">
    <SideBar class="app__side-bar" :class="!sidebar_state && 'app__side-bar-back'"/>
    <router-view class="app__router"/> 
  </div>
</template>
<script>
import SideBar from "@/components/layout/SideBarLayout.vue";
import { mapState } from "vuex";
  export default{
    name:'App',
    components:{
      SideBar
    },
    computed: {
    ...mapState("sideBarModule", ["sidebar_state"]),
  },
  }
</script>
