// composables funkcija koja dovlaci odgovarajuceg usera za single view komponentu
import userType from '@/types/typeUser'
import {ref} from 'vue';

const getUser = (id: number | string) => {
    const user = ref<userType>()
    const error = ref(null)

    const load = async () => {
      try {
        const listOfUser = await fetch('http://localhost:3000/users/' + id)  // dodajemo ID kako bi znali koji nam user treba
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