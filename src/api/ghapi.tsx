import axios from 'axios'
import { InterfaceUsers } from '../components/InterfaceUsers'

const useObtenerUsuarios = async (username: string) => {
  //const [users, setUsers] = useState<InterfaceUsers>(userInitial[0])
  let user: InterfaceUsers | any = await axios
    .get('https://api.github.com/users/' + username)
    .catch(function (e) {
      console.log(e)
    })
  return user
}

export default useObtenerUsuarios

//   if (user) {
//     const repos = await axios.get(user.data.repos_url)
//     const repo = repos.data[0]
//     const owner = await axios.get(repo.owner.url)

//     const userDetails = {
//       ...user.data,
//       repoName: repo.name,
//       repoCreator: owner.data.login,
//       repoCreatedAt: repo.created_at,
//       repoStars: repo.stargazers_count,
//       repoOrganization: repo.organization?.login || ''
//     }

//     return userDetails
//   }
//   return null
// }

// export default useObtenerUsuarios
