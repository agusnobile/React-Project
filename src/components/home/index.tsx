import { Button, Input } from '@architecture-it/stylesystem'
import { useEffect, useState } from 'react'
import useObtenerUsuarios from '../../api/ghapi'
import { InterfaceUsers } from '../InterfaceUsers'
import Alerta from '../alerts/success'
import Lista from '../list/list'
import { InterfaceList } from '../list/interfacelist'
import axios from 'axios'

const Busqueda = () => {
  const [username, setUsername] = useState('')
  const [debeabrirse, setDebeAbrirse] = useState<boolean>(false) //seteado en false para no mostrarse
  const [mensaje, setMensaje] = useState<string>('') //use state para setear mensaje
  const [color, setColor] = useState<'success' | 'info' | 'warning' | 'error' | undefined>(
    undefined
  ) // useState para setear el color de la notificacion
  const [lista, setLista] = useState<InterfaceList[]>([])
  const [debeActualizar, Actualizar] = useState(false)
  useEffect(() => {
    const listUsuarios = async () => {
      const listUsers: InterfaceList[] = await (await axios.get('http://localhost:3000/Users')).data
      setLista(listUsers)
    }
    listUsuarios()
  }, [debeActualizar])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let usuariotip: InterfaceUsers | any = await useObtenerUsuarios(username)
    if (
      // condicion para definir si el usuario existe
      typeof usuariotip === 'object' &&
      usuariotip !== null &&
      usuariotip.data.login === username
    ) {
      setColor('success')
      setMensaje('Tu usuario fue encontrado con éxito!')
      if (esValido(usuariotip.data.id)) {
        guardarUsuario(usuariotip.data.id, usuariotip.data.login, usuariotip.data.avatar_url)
        setDebeAbrirse(true)
      } else {
        setColor('warning')
        setMensaje('Tu usuario ya fue agregado a la lista!')
        setDebeAbrirse(true)
      }
    } else {
      setColor('error')
      setMensaje('Tu usuario no fue encontrado!')
      setDebeAbrirse(true)
    }
  }
  function esValido(id: number) {
    const repetido = lista.map(function (element) {
      return element.id
    })
    console.log('id:', id)
    console.log('repetido:', repetido)
    return !repetido.includes(id)
  }

  const guardarUsuario = async (id: number, login: string, avatar_url: string) => {
    const persona: InterfaceList = { id: id, login: login, avatar: avatar_url }
    console.log('persona:', persona)
    await axios.post('http://localhost:3000/Users', persona)
    Actualizar((prev) => !prev)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  return (
    <div style={{ height: '120vh', margin: 'auto' }}>
      <h2
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Ubuntu',
          fontSize: '36px',
          color: '#d71920',
          fontWeight: '600',
          margin: '50px',
        }}
      >
        Usuarios de GitHub
      </h2>
      {debeabrirse ? (
        <Alerta
          color={color}
          mensaje={mensaje}
          setDebeAbrirse={setDebeAbrirse}
          debeabrirse={debeabrirse}
        />
      ) : null}
      <form
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '30%',
          margin: 'auto',
        }}
        onSubmit={handleSubmit}
      >
        <Input label='Nombre' type='text' value={username} onChange={handleChange} />

        <Button
          style={{ margin: '20px auto', width: '40%' }}
          type='submit'
          color='primary'
          onFocusVisible={() => {}}
          text='Buscar'
          variant='contained'
        />
      </form>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Lista usuarios={lista} Actualizar={Actualizar} />
      </div>
    </div>
  )
}
export default Busqueda
