import themes  from "./assets/scss/themes/themes.json";

  const theme = {
    
   mounted(){
    //this.$ls.remove('themes')
    //this.$ls.remove('theme')
      if(this.$ls.get('theme') == null || this.$ls.get('themes') == null){
        this.$ls.set('theme','theme_light')
        this.$ls.set('themes', themes.themes);
        this.changeTheme();
      }else{
        this.$ls.set('theme',this.$ls.get('theme') == 'theme_light' ? 'theme_darck':'theme_light')
        this.changeTheme();
      }
    },
   methods: {
      changeTheme(){
       
         let themes_arr = this.$ls.get('themes');
         let theme = this.$ls.get('theme');
         for (let i = 0; i < themes_arr.length; i++) {
           let item = themes_arr[i];
           if (theme == "theme_light") {
             //console.log(item.var,item['value_darck'])
             document.documentElement.style.setProperty(item.var,item.value_darck);
           }
           if (theme == "theme_darck") {
             //console.log(item.var,item['value_darck'])
             document.documentElement.style.setProperty(item.var,item.value_light);
           }
         }
         this.$ls.set('theme',theme == 'theme_light' ? 'theme_darck':'theme_light')
         
       }
   }
 };
 
 export default {
   theme
 };