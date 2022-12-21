import userType from '@/types/typeUser'
import {ref} from 'vue';

const getUser = (id: number | string) => {
    const user = ref<userType>()
    const error = ref(null)

    const load = async () => {
      try {
        const listOfUser = await fetch('https://jsonplaceholder.typicode.com/users/' + id)  
        if(!listOfUser.ok)  {
          throw Error('no user find')
        }
        user.value = await listOfUser.json()
      }
      catch (err: any) {
        error.value = err.message
      }
    }
    return {user, error, load}
}

export default getUser