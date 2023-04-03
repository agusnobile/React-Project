import { InterfaceList } from './interfacelist'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Avatar, IconButton, ListItemAvatar } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrash } from '@fortawesome/pro-light-svg-icons'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface interfaceL {
  usuarios: InterfaceList[]
  Actualizar: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Lista({ usuarios, Actualizar }: interfaceL) {
  const items = usuarios.map((usuario: InterfaceList, index: number) => (
    <ListItem className='Itemlista' key={index} component='div' disablePadding>
      <ListItemAvatar>
        <Avatar>
          <img style={{ width: '100%' }} src={usuario.avatar} />
        </Avatar>
      </ListItemAvatar>
      <ListItemButton>
        <ListItemText primary={`Id : ${usuario.id + ' | Nombre de usuario : ' + usuario.login}`} />
      </ListItemButton>
      <IconButton
        onClick={() => borrarItem(usuario.id)}
        edge='end'
        aria-label='delete'
        style={{ marginRight: '20px' }}
      >
        <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
      </IconButton>
      <Link to={`/userrepo/${usuario.login}`} style={{ marginRight: '15px' }}>
        <FontAwesomeIcon icon={faEye} style={{ color: 'red' }} />
      </Link>
    </ListItem>
  ))

  const borrarItem = async (id: number) => {
    await axios.delete('http://localhost:3000/Users/' + id)
    Actualizar((prev) => !prev)
  }

  return (
    <Box
      style={{ overflow: 'scroll', overflowX: 'hidden' }}
      sx={{
        width: '100%',
        height: 300,
        maxWidth: 600,
        bgcolor: 'background.paper',
        marginTop: '30px',
      }}
    >
      {items}
    </Box>
  )
}
