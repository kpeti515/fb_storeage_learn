import React from 'react';
import Modal from 'react-modal'
import PswForm from './Psw_form'
const PswModal = (props) => {
  return (
  <Modal
    isOpen={props.isOpen}
    contentLabel="PSW hozzáadása"
    onRequestClose={props.onRequestClose}
  >
    <PswForm {...props}/>
    <button >Submit</button>
  </Modal>
  )
}

export { PswModal as default }