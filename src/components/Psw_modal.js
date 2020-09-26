import React from 'react';
import Modal from 'react-modal'
import PswForm from './Psw_form'

Modal.setAppElement('#root')
const PswModal = (props) => {
  
  return (
    <Modal
      isOpen={props.isOpen}
      contentLabel="PSW hozzáadása"
      onRequestClose={props.onRequestClose}
    >
      <PswForm {...props} />
    </Modal>
  )
}

export { PswModal as default }