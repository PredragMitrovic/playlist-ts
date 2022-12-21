import userType from '@/types/typeUser'
import { defineComponent, onMounted, ref } from 'vue';

const getUsers = () => {
    const users = ref<userType[]>([])
    const error = ref(null)

    const load = async () => {
      try {
        const listOfUser = await fetch('https://jsonplaceholder.typicode.com/users')  
        if(!listOfUser.ok)  {
          throw Error('no data find')
        }
        users.value = await listOfUser.json()
        console.log(listOfUser)
      }
      catch (err: any) {
        error.value = err.message
      }
    }
    return {users, error, load}
}

export default getUsers