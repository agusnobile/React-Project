export interface InterfaceALert {
  setDebeAbrirse: (value: boolean) => void
  mensaje: string
  color: 'success' | 'info' | 'warning' | 'error' | undefined
  debeabrirse: boolean
}
