import axios from 'axios'
import { InterfaceUsers } from '../components/InterfaceUsers'
import { userInitial } from './data'

const useObtenerUsuarios = (username: string) => {
  //const [users, setUsers] = useState<InterfaceUsers>(userInitial[0])
  let user: InterfaceUsers = userInitial[0]
  axios.get('https://api.github.com/users/' + username).then((respuesta) => {
    user = respuesta.data as InterfaceUsers
    console.log(user)
  })

  console.log(user)
  return user
}

export default useObtenerUsuarios
