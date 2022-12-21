<template>
    <div>
        <h1>Podaci od usera</h1>            
        {{user.id}} <br>
        {{user.email}} <br>
        <router-link :to="{name: 'Home'}">Back</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import getUser from '../composables/getUser';
export default defineComponent({
    props: ['id'],
    setup(props) {
        const {user, error, load} = getUser(props.id)

        load()

        return {user, error}
    }
})
</script>
