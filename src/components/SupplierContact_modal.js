import React from 'react';
import Modal from 'react-modal'
import SupplierContactForm from './SupplierContact_form'
Modal.setAppElement('#root')
const SupplierContactModal = (props) => {
  
  return (
    <Modal
      isOpen={props.isOpen}
      contentLabel="Beszállítói kontakt hozzáadása"
      onRequestClose={props.onRequestClose}
    >
      <SupplierContactForm {...props} />
    </Modal>
  )
}

export { SupplierContactModal as default }