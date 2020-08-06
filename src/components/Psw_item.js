import React from 'react'
import { pswStore } from '../firebase/firebase'
const PswItem = ({
  psw
}) => {
  
    pswStore.child(`${psw.id}.JPG`).getDownloadURL().then((url) => {
    const a = document.getElementById(psw.id)  
    a.href = url

    })

  return (
    <div>
      <h3>{psw.drawingNumber}</h3>
      <p>{psw.supplier}</p>
      <p>{psw.project}</p>
      <p>{psw.customer}</p>
      <a id={`${psw.id}`}> Fájl letöltése</a>
      <p>Érvényességi idő: {psw.validationDate} - {psw.validUntil}</p>
    </div>
  )
}

export { PswItem as default }