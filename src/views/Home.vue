<template>
  <p v-if="error">{{error}} - greska</p>

  <router-link :to="{name:'AddUser' }">Add new user</router-link>
  <h1>Ovo radi for</h1>
  

  <short-user-data v-if="users.length"   :users="users"/>
  <div v-else>Loading...</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import getUsers from '@/composables/getUsers';
import shortUserData from '@/components/shortInfoOfuser.vue'

export default defineComponent({
  name: 'App',
  components: {
    shortUserData,
  },
  setup() {
    const {users, error, load} = getUsers()
    load()
    return {error, users}

  }
});
</script>

<style>

</style>
