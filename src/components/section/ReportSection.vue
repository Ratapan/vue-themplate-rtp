<!-- changeTheme() -->
<template>
  <div
    class="box-report"
    :class="report.orientation == 'r' && 'box-report__reberse'"
  >
    <div class="box-report__box-img">
      <img class="box-report__img" @click="nextImg()" :src="report.imgs[img_position]" alt="" />
      <div class="box-report__img-select">
        <div
          v-for="(dot, i) in report.imgs"
          :key="i"
          @click="img_position = i"
          class="box-report__img-select-dot"
          :class="img_position == i && 'active'"
        ></div>
      </div>
    </div>
    <div class="box-report__text">
      <h1 class="title-second">{{ report.title }}</h1>
      <br />
      <p class="parr__one">{{ report.text }}</p>
      <br />
      <div class="btns-arry">
        <a
          class="btns-arry__link"
          v-for="(link, i) in report.links"
          :key="i"
          target="_blank"
          :href="link.link"
          >{{ link.name }}</a
        >
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "box-report",
  props: {
    report: Object,
  },
  data() {
    return {
      img_position: 0,
    };
  },
  methods: {
    nextImg(){
      if(this.img_position == this.report.imgs.length - 1 || this.report.imgs.length == 0){
        this.img_position = 0;
        return
      }
      if (this.img_position !== this.report.imgs.length - 1 || this.report.imgs.length !== 0) {
        this.img_position = this.img_position + 1;
        return
      }
      
    }
  },
};
</script>
