import React from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root')
const DeleteConfirmationModal = (props) => {
  
  return (
    <Modal
      isOpen={props.isOpen}
      contentLabel="Törlés megerősítése"
      onRequestClose={props.onRequestClose}
    >
      <h3>Valóban törölni kívánja az adott elemet?</h3>
      <button onClick={props.deleteEntity}>Törlés</button>
      <button onClick={props.onRequestClose}>Mégse</button>
    </Modal>
  )
}

export { DeleteConfirmationModal as default }