<!-- changeTheme() -->
<template>
     <div class="box-info" :class="orientation == 'r' && 'box-info__reberse'">
       <div class="box-info__box-img">
         <img :style="'max-height:'+img_max_height+'px'"
          class="box-info__img" :src="img" alt="" />
       </div>
       <div class="box-info__text parr__one">
         {{text}} 
       </div>
     </div>
 </template>
 <script>

 export default {
   name: "info-box",
   props:{
      text:String,
      img:String,
      orientation:String,
      img_max_height:String,
   },
   methods:{
   }

 };
 </script>