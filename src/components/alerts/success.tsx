import { Snackbar, Alert } from '@mui/material'
import { InterfaceALert } from './alertprops'

function Alerta({ setDebeAbrirse, mensaje, color, debeabrirse }: InterfaceALert) {
  const vertical = 'top'
  const horizontal = 'center'
  return (
    <Snackbar
      open={debeabrirse}
      autoHideDuration={2000}
      onClose={() => setDebeAbrirse(false)}
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert
        onClose={() => setDebeAbrirse(false)}
        severity={color}
        sx={{ width: '100%', alignItems: 'center' }}
      >
        {mensaje}
      </Alert>
    </Snackbar>
  )
}
export default Alerta
