import axios from 'axios'
import { InterfaceRepos } from '../components/tarjeta'

const useObtenerRepos = async (username: string) => {
  let repos: any = await axios
    .get('https://api.github.com/users/' + username + '/repos')
    .catch(function (e) {
      console.log(e)
    })
  let data: InterfaceRepos[] = repos.data
  console.log(data)
  return data
}

export default useObtenerRepos

// import { useEffect, useState } from 'react'
// import { InterfaceUsers } from '../components/InterfaceUsers'
// import Tarjeta from '../components/tarjeta'
// import useObtenerUsuarios from './ghapi'

// function UseObtenerRepos() {
//   const [user, setUser] = useState<InterfaceUsers>()
//   useEffect(() => {
//     const listaRepos = async () => {
//       setUser(await useObtenerUsuarios('nconte'))
//     }
//     listaRepos()
//   }, [])
//   return <div>{user && <Tarjeta user={user} />}</div>
// }
// // console.log('Nombre del repositorio: ', repo.name)
// // console.log('Propietario del repositorio: ', repo.owner.login)
// // console.log('Fecha de creación del repositorio: ', repo.created_at)
// // console.log('Número de estrellas del repositorio: ', repo.stargazers_count)
// // if (repo.organization) {
// //   console.log('Organización del repositorio: ', repo.organization.login)
// // } else {
// //   console.log('El repositorio no pertenece a ninguna organización.')
// // }

// export default UseObtenerRepos
