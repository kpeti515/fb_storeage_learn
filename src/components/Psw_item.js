import React from 'react'
import DownloadLink from "react-download-link"
import { pswStore, storage, pswDb } from '../firebase/firebase'
import DeleteConfirmationModal from './DeleteConfirmationModal'
import PswModal from './Psw_modal'
import deleteNotification from './../notifications/deleted'

const PswItem = ({
  psw
}) => {
  const [modalIsOpenForDelete, setIsOpenForDelete] = React.useState(false)
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openPswModal() {
    setIsOpen(true)
  }
  function closePswModal() {
    setIsOpen(false)
  }
  function openDeleteModal() {
    setIsOpenForDelete(true)
  }
  function closeDeleteModal() {
    setIsOpenForDelete(false)
  }
  function deleteEntity() {
    pswStore.child(`${psw.id}${psw.fileExtension}`).delete().then(function () {
      deleteNotification()
    }).catch(function (error) {
      console.error("Error removing document: ", error)
    })
    pswDb.doc(psw.id).delete().then(function () {
      console.log("Document successfully deleted!")
    }).catch(function (error) {
      console.error("Error removing document: ", error)
    })
  }
  console.log(psw)
  return (
    <React.Fragment>
      <tbody>
        <tr>
          <td>{psw.drawingNumber}</td>
          <td>{psw.supplier}</td>
          <td>{psw.project}</td>
          <td>{psw.customer}</td>
          <td>{psw.pswStatus}</td>
          <td>{psw.validationDate}</td>
          <td>
            <DownloadLink
              label='PSW letöltése'
              filename={`${psw.drawingNumber}_${psw.supplier}_${psw.project}${psw.fileExtension}`}
              exportFile={async () => {
                const url = await storage.refFromURL(`${psw.fileUrl}`).getDownloadURL()
                const response = await fetch(url)
                return response.blob()
              }
              }
            />
          </td>
          <td><button onClick={openPswModal}>Módosítás</button></td>
          <td><button onClick={openDeleteModal}>Törlés</button></td>
        </tr>
      </tbody>
      <PswModal psw={psw} isOpen={modalIsOpen} onRequestClose={closePswModal} />
      <DeleteConfirmationModal isOpen={modalIsOpenForDelete} onRequestClose={closeDeleteModal} deleteEntity={deleteEntity} />
    </React.Fragment>
  )
}

export { PswItem as default }