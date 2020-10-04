import React from 'react'
import DownloadLink from "react-download-link"
import { storage } from '../firebase/firebase'
const PswItem = ({
  psw
}) => {
  return (
    <div>
      <h3>Rajzszám: {psw.drawingNumber}</h3>
      <p>Beszállító: {psw.supplier}</p>
      <p>Projekt: {psw.project}</p>
      <p>Vevő: {psw.customer}</p>
      <DownloadLink
        label='PSW letöltése'
        filename={`${psw.drawingNumber}_${psw.supplier}_${psw.project}${psw.fileExtension}`} 
        exportFile={() =>storage.refFromURL(`${psw.fileUrl}`).getDownloadURL()}
      />
      <p>Érvényességi idő: {psw.validationDate} - {psw.validUntil}</p>
    </div>
  )
}

export { PswItem as default }