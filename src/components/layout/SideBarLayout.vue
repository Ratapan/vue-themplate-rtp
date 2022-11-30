<template>
  <div class="side-bar">
    <h2 class="side-bar__title">
      <img
        :src="changeImg()"
        alt=""
        class="side-bar__title-image"
        :class="!sidebar_state && 'side-bar__title-image-back'"
      />
      <h2 class="side-bar__title-text" v-if="sidebar_state">Ratapan</h2>
    </h2>
    <div class="side-bar__container-arrow" @click="stateAction">
      <img
        :src="
          $ls.get('theme') !== 'theme_light'
            ? 'imgs/icon-arrow-light.png'
            : 'imgs/icon-arrow-darck.png'
        "
        alt="arrow"
        class="side-bar__container-arrow-img"
        :class="!sidebar_state && 'side-bar__container-arrow-img-back'"
      />
    </div>
    <nav class="side-bar__list">
        <router-link v-for="(item,k) in bar_list" :key="k"
        class="side-bar__list-item"
        :class="path == item.path && 'side-bar__list-item-active',!sidebar_state&&'side-bar__list-item-back'"
        :to="item.path"
        > 
          {{sidebar_state?item.name:item.name_back}}
        </router-link>
    </nav>
    <div class="side-bar__theme">
      <label class="switch">
        <input
          class="switch__input"
          type="checkbox"
          id="check-leng"
          @click="changeTheme"
          v-model="theme_select"
        />
        <span class="switch__slider round"></span>
      </label>
      <p v-if="sidebar_state"> 🌓 </p>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Sidebar",
  data() {
    return {
      theme_select: this.$ls.get("theme") !== "theme_light",
      current_page: "",
      bar_list: [
        // {
        //   name: "Home",
        //   name_back:"H",
        //   path: "/",
        // },
        {
          name: "Home",
          name_back: "H",
          path: "/",
        },
      ],
    };
  },
  computed: {
    ...mapState("sideBarModule", ["sidebar_state"]),
    path() {
      return this.$route.path;
    },
  },
  mounted() {},
  methods: {
    ...mapActions("sideBarModule", ["stateAction"]),
    changeImg() {
      return this.sidebar_state
        ? this.$ls.get("theme") !== "theme_light"
          ? "imgs/rtp-darck.png"
          : "imgs/rtp-light.png"
        : this.$ls.get("theme") !== "theme_light"
        ? "imgs/rtp-light.png"
        : "imgs/rtp-darck.png";
    },
  },
};
</script>