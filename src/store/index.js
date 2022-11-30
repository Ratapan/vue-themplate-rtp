import { createStore } from 'vuex'
import sideBarModule from './modules/storeSidebar'

export default createStore({
  modules: {
    sideBarModule
  }
})
