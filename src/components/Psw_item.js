import React from 'react'
import { storage } from '../firebase/firebase'
const PswItem = ({
  psw
}) => {
  const fileRef = storage.refFromURL(`${psw.fileUrl}`)
  fileRef.getDownloadURL().then((url) => {
    const a = document.getElementById(psw.id)
    a.href = url
  })

  return (
    <div>
      <h3>Rajzszám: {psw.drawingNumber}</h3>
      <p>Beszállító: {psw.supplier}</p>
      <p>Projekt: {psw.project}</p>
      <p>Vevő: {psw.customer}</p>
      <a id={`${psw.id}`} href="Will have via fileRef.then()" target="_blank">PSW Fájl megnyitása</a>
      <p>Érvényességi idő: {psw.validationDate} - {psw.validUntil}</p>
    </div>
  )
}

export { PswItem as default }