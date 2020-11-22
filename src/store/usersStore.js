import { reactive, ref, readonly, computed } from 'vue'
import axios from 'axios'

const state = reactive({
  data: [],
  counter: 0
})

const appName = ref('Composition App')


const actions = {
  increment () {
    state.counter++
  },
  async getData () {
    const res = await axios.get('https://api.github.com/users')
    state.data = res.data
  }
}

const getters = {
  counter: computed(() => state.counter)
}

export default readonly({
  state,
  actions,
  getters,
  appName
})
