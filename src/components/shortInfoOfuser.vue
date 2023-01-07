<!-- Komponenta koja rendera sve Usere na home stranici -->
<template>
<li>
    <!-- ovde prosledjujemo ruter id propsu kako bi mogao da definise single user ID -->
    <router-link :to="{ name: 'Detail', params: { id: user.id } }">
        {{ user.name }} <br>
    </router-link>
    {{ user.id }} <br>
    {{ user.email }} <br>
    <ul v-if="user.knownProgramLanguage">
        <li v-for=" tag in user.knownProgramLanguage" :key="tag">
            <router-link :to="{ name: 'Tags', params: { lang: tag } }"> #{{ tag }} </router-link>
        </li>
    </ul>
</li>

</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import userType from '@/types/typeUser'
import { useRouter } from 'vue-router'
export default defineComponent({
props: {
    user: {
        required: true,
        type: Object as PropType<userType>
    }
}
})
</script>
<style scoped>

</style>