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
  <img src={`http://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=BEGIN%3AVCARD%0AVERSION%3A2.1%0AFN%3A${psw.drawingNumber}+${psw.supplier}%0AN%3Alastname%3Bfirstname%0ATITLE%3A${psw.project}%0ATEL%3BCELL%3Aphonemobile%0ATEL%3BWORK%3BVOICE%3Aphonebusiness%0AEMAIL%3BWORK%3BINTERNET%3Aemail%0AURL%3Awebsite%0AADR%3A%3B%3Bstreet%3Bcity%3B%3Bzipcode%3Bcountry%0AORG%3Acompany%0AEND%3AVCARD%0A&qzone=1&margin=0&size=200x200&ecc=M`}/>
      <p>Érvényességi idő: {psw.validationDate} - {psw.validUntil}</p>
    </div>
  )
}

export { PswItem as default }