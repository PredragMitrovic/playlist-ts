<template>
    <div>
        <h1> Add new User</h1>
        <form @submit.prevent="addNewUser"> 
            <ul>
                <li>
                    <label for="name">name</label>
                    <input type="text" id="name" v-model="name">
                    <p>{{ name }}</p>
                </li>
                <li>
                    <label for="username">username</label>
                    <input type="text" id="username" v-model="username">
                    <p>{{ username }}</p>
                </li>
                <li>
                    <label for="email">email</label>
                    <input type="text" id="username" v-model="email">
                    <p>{{ email }}</p>
                </li>
                <li>
                    <label for="tag">tags</label>
                    <input type="text" id="tag" v-model="tag" @keydown.enter="hendleKeydown">
                    <p>{{ tag }}</p>
                    <p>{{ tags }}</p>
                </li>
            </ul>
            <button type="submit"> add user</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup () {
        const name = ref('')
        const username = ref('')
        const email = ref('')
        const tags = ref([''])
        const tag = ref('')
        const hendleKeydown = () => { 
            if (!tags.value.includes(tag.value)) {
                tag.value = tag.value.replace(/\s/g,'')
                tags.value.push(tag.value)
            }
             tag.value = ''
        }
        const addNewUser = async () => {
            console.log('ovo radi ')
            const user = {
                name: name.value,
                username: username.value,
                email: email.value
            }
            await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: { 'Content-Type': 'aplication/json' },
                body: JSON.stringify(user)
            })
            console.log('ovo radi ')

        }


        return { name, username, email, tag, tags, hendleKeydown, addNewUser }
    }
})
</script>

<style scoped>

</style>