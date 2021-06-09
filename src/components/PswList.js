import React, { useContext } from 'react'
import PswItem from './Psw_item'
import FirebaseContext from '../context/FirebaseContext'

const PswList = () => {
  const { psw } = useContext(FirebaseContext)

  return psw.map((psw) => (
    <PswItem key={psw.id} psw={psw} />
  ))
}

export { PswList as default }