<!-- changeTheme() -->
<template>
   <div>
    <br />
    <div>
      <div class="box-fles-line">
        <h1 class="title-main">Hola, este es mi themplate</h1>
        <div class="move title-main">🖐</div>
      </div>
    </div>
    <br />
      <Box :text="box1.box_text" :img="box1.box_img" :orientation="box1.box_orientation" :img_max_height="500"/>
    <br />
    <Box :text="box2.box_text" :img="box2.box_img" :orientation="box2.box_orientation" :img_max_height="400" />
    <br>
    <SectionReport :report="report" />
    <br>
    <Grid :items="rrss" />
    <br>
   </div>
 </template>
 <script>
 
import Box from "../components/tools/InfoBoxTool.vue";
import Grid from "../components/layout/oneGridLayout.vue";
import SectionReport from "@/components/section/ReportSection.vue";
export default {
  name: "About",
  components: {
    Box,
    Grid,
    SectionReport,
  },
  data() {
    return {
      box1:{
        box_text: `Hola este es un componente que te sera de utilidad para mostrar informacion con una imagen.`,
        box_img: "imgs/2.webp",
        box_orientation: "l"
      },
      box2:{
        box_text: `Se puede cambiar la orientacion del componente con un paramentro llamado "box_orientation".`,
        box_img: "imgs/1.webp",
        box_orientation: "r"
      },
      report:{
          imgs: [
            "https://ratapan.com/repo/Imgs/tools/imageToWebp1.jpeg",
            "https://ratapan.com/repo/Imgs/tools/imageToWebp2.jpeg",
          ],
          title: "Reporte/Articulo",
          text: `Este es un componente que cree para añadir articulos. En la parte baja del side bar tenemos un switch que acciona la función changeTheme(), esta es global. Este proyecto usa la metodología Bem para nombrar las clases, también, para la arquitectura de sass se usa el 7+1.`,
          links: [
            {
              name: "GitHub 😺",
              link: "https://github.com/Ratapan/",
            },
            {
              name: "Demo 🦝",
              link: "https://ratapan.com/repo/pages/imagesToWebp.html",
            },
            {
              name: "Bem 🤓",
              link: "https://blog.ida.cl/desarrollo/metodologia-bem-desarrollo-front-end/",
            },
            {
              name: "7+1 🤯",
              link: "https://www.learnhowtoprogram.com/user-interfaces/building-layouts-preprocessors/7-1-sass-architecture",
            },
          ],
          orientation: "",
        },
      rrss: [
        {
          name: "YouTube",
          img: "https://cdn-icons-png.flaticon.com/512/174/174883.png",
          link: "https://www.youtube.com/channel/UC0TaqwXpQA4hPizwMaHeaSA",
        },
        {
          name: "GitHub",
          img: "https://ratapan.com/repo/Imgs/icons/github.png",
          link: "https://github.com/Ratapan",
        },
        {
          name: "Linkedin",
          img: "https://ratapan.com/repo/Imgs/icons/linkedin.png",
          link: "https://www.linkedin.com/in/javier-sabando/",
        },
        {
          name: "Instagram",
          img: "https://ratapan.com/repo/Imgs/icons/instagram.png",
          link: "https://www.instagram.com/_ratapan_/",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
 </script>
 