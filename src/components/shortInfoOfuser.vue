<template>
    <ul >
        <li v-for="user in users" :key="user.id">
            <router-link :to="{name: 'Detail', params: {id: user.id}}">
                {{user.name}} <br>
            </router-link>
            {{user.id}} <br>
            {{user.email}} <br>
        </li>
    </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import userType from '@/types/typeUser'
export default defineComponent({
props: {
    users: {
        required: true,
        type: Array as PropType<userType[]>
    }
}
})
</script>
<style scoped>
li {
    margin: 20px;
    padding: 20px;
    background-color: lightgrey;
    color: blue;
    list-style-type: none;
}
</style>