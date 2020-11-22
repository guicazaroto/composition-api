<template>
  <button @click="increment">Increment</button>
</template>

<script>
export default {
  inject: ['usersStore'],
  methods: {
    increment () {
      this.usersStore.actions.increment()
    }
  }
}
</script>
