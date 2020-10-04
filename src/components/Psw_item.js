import React from 'react'
import { storage } from '../firebase/firebase'
const PswItem = ({
  psw
}) => {
  const downloadPsw = (e) => {
    e.preventDefault()
    storage.refFromURL(`${psw.fileUrl}`).getDownloadURL().then((url) => {
      window.location.href = url
    })
  }

  return (
    <div>
      <h3>Rajzszám: {psw.drawingNumber}</h3>
      <p>Beszállító: {psw.supplier}</p>
      <p>Projekt: {psw.project}</p>
      <p>Vevő: {psw.customer}</p>
      <button onClick={downloadPsw}>PSW letöltése</button>
      <p>Érvényességi idő: {psw.validationDate} - {psw.validUntil}</p>
    </div>
  )
}

export { PswItem as default }