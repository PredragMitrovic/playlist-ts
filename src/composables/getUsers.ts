// dovodimo sve usere, ceo JSON

import userType from '@/types/typeUser'
import { defineComponent, onMounted, ref } from 'vue';

const getUsers = () => {
    const users = ref<userType[]>([])  // bitno!! type ako je array mora da bude i prazan array
    const error = ref(null)

    const load = async () => {
      try {
        const listOfUser = await fetch('http://localhost:3000/users')  
        if(!listOfUser.ok)  {  // ako response nije ok onda baci gresku sa nekim stringom
          throw Error('no data find') 
        }
        users.value = await listOfUser.json()
        console.log(listOfUser)
      }
      catch (err: any) { //parametar hvata string od greske iznad i posle moze se radi sa njim sta god
        error.value = err.message
      }
    }
    return {users, error, load}
}

export default getUsers