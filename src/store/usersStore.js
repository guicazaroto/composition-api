import { reactive, ref, readonly, computed } from 'vue'
import axios from 'axios'

const state = reactive({
  data: [],
  counter: 0
})

const appName = ref('Composition App')

async function getData () {
  const res = await axios.get('https://api.github.com/users')
  state.data = res.data
}

function increment () {
  state.counter++
}

const totalUsers = computed(() => state.data.length);

export default readonly({
  state,
  totalUsers,
  getData,
  increment,
  appName
})
