import React from 'react'
import DownloadLink from "react-download-link"
import { storage } from '../firebase/firebase'
const PswItem = ({
  psw
}) => {
  return (
    <React.Fragment>
      <tbody>
      <tr>
        <td>{psw.drawingNumber}</td>
        <td>{psw.supplier}</td>
        <td>{psw.project}</td>
        <td>{psw.customer}</td>
        <td>
          <DownloadLink
            label='PSW letöltése'
            filename={`${psw.drawingNumber}_${psw.supplier}_${psw.project}${psw.fileExtension}`}
            exportFile={() => storage.refFromURL(`${psw.fileUrl}`).getDownloadURL()}
          />
        </td>
      </tr>
      </tbody>
    </React.Fragment>
  )
}

export { PswItem as default }