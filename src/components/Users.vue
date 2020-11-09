<template>
  <h1>{{ counter }}</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.login }}
    </li>
  </ul>
</template>

<script>
export default {
  inject: ["usersStore"],
  computed: {
    users () {
      return this.usersStore.state.data
    },
    counter () {
      return this.usersStore.state.counter
    }
  },
  created () {
    this.usersStore.getData()
  }
}
</script>
