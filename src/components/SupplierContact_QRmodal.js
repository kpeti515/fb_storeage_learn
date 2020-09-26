import React from 'react';
import Modal from 'react-modal'
Modal.setAppElement('#root')
const SupplierContactQRModal = (props) => {

  return (
    <Modal
      isOpen={props.isOpen}
      contentLabel="Beszállítói kontakt QR kódja"
      onRequestClose={props.onRequestClose}
    >
      {/* http://goqr.me/api/doc/create-qr-code/ */}
      <img src={`http://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=BEGIN%3AVCARD%0AVERSION%3A2.1%0AFN%3A${props.supplierContact.firstName}+${props.supplierContact.lastName}%0AN%3Alastname%3Bfirstname%0ATITLE%3A${props.supplierContact.title}%0ATEL%3BCELL%3A${props.supplierContact.phoneMobile}%0ATEL%3BWORK%3BVOICE%3A${props.supplierContact.phoneBusiness}%0AEMAIL%3BWORK%3BINTERNET%3A${props.supplierContact.email}%0AURL%3A${props.supplierContact.website}%0AADR%3A%3B%3B${props.supplierContact.street}%3B${props.supplierContact.city}%3B%3B${props.supplierContact.zipCode}%3B${props.supplierContact.country}%0AORG%3A${props.supplierContact.supplier}%0AEND%3AVCARD%0A&qzone=1&margin=0&size=400x400&ecc=L`} alt="QR code" />

    </Modal>
  )
}

export { SupplierContactQRModal as default }