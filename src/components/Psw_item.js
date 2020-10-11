import React from 'react'
import DownloadLink from "react-download-link"
import { pswStore, storage, pswDb} from '../firebase/firebase'
import DeleteConfirmationModal from './DeleteConfirmationModal'
const PswItem = ({
  psw
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openDeleteModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function deleteEntity() {
    pswStore.child(`${psw.id}${psw.fileExtension}`).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
    pswDb.doc(psw.id).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  }

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
          <td><button>Módosítás</button></td>
          <td><button onClick={openDeleteModal}>Törlés</button></td>
        </tr>
      </tbody>
      <DeleteConfirmationModal isOpen={modalIsOpen} onRequestClose={closeModal} deleteEntity={deleteEntity} />
    </React.Fragment>
  )
}

export { PswItem as default }