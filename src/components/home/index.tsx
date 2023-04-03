import { Button, Footer, Header } from '@architecture-it/stylesystem'
import { List } from '@mui/material'
import { useState } from 'react'
import useObtenerUsuarios from '../../api/ghapi'
import { InterfaceUsers } from '../InterfaceUsers'
import { userInitial } from '../../api/data'
import SelectInput from '@mui/material/Select/SelectInput'

const Home = () => {
  const [username, setUsername] = useState('')
  const [usuariotipo, setUsuariotipo] = useState<InterfaceUsers>(userInitial[0])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setUsuariotipo(useObtenerUsuarios(username))
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }
  return (
    <div>
      <Header onClickButton={() => {}}>{}</Header>
      <h2>Buscador de Usuarios</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Ingrese nombre de Usuario'
          value={username}
          onChange={handleChange}
        />
        <button type='submit'>Buscar</button>
      </form>
      <Button color='primary' onFocusVisible={() => {}} text='Guardar' variant='contained' />
      <List />
      <Footer />
    </div>
  )
}
export default Home
