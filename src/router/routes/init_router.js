import None from '@/views/themplate.vue'
const InitList = [
   { path: '/api'},// Ignore or pass on to server
   { path: "/:pathMatch(.*)*", component: None}// Ignore or pass on to server
 ];
 
 export default {
  InitList
 };