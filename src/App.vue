<template>
  <h1>{{ name }}</h1>
  <Increment />
  <Users />
</template>

<script>
import Users from '@/components/Users'
import Increment from '@/components/Increment'
import usersStore from '@/store/usersStore'

export default {
  name: 'App',
  components: {
    Users,
    Increment
  },
  provide: {
    usersStore
  },
  computed: {
    name () {
      return usersStore.appName
    }
  },
  created () {
    console.log(usersStore.appName)
  }
}
</script>

