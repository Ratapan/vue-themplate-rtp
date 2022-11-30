<template>
  <section class="grid-main">
   <div class="grid-main__grid" v-for="(item, i) in items" :key="i">
    <a class="grid-main__box" :href="item.link" target="_blank">
      <img :src="item.img" alt="" class="grid-main__box-img" />
      <div class="grid-main__box-front">{{item.name}}</div>
   </a>
    </div>
  </section>
</template>
<script>
export default {
  name: "one-grid",
  props: {
    items: Object,
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
