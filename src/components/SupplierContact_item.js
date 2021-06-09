import React from 'react'
import SupplierContactQRModal from './SupplierContact_QRmodal'
// import { supplierContactDb } from '../firebase/firebase'
const SupplierContact = ({
  supplierContact
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <React.Fragment>
      <tbody>
        <tr>
          <td><button onClick={openModal}>QR kód</button></td>
          <td>{supplierContact.supplier}</td>
          <td>{supplierContact.title} {supplierContact.firstName} {supplierContact.lastName}</td>
          <td><a href={`mailto:${supplierContact.email}`}>{supplierContact.email}</a></td>
          <td><a href={`tel:${supplierContact.phoneMobile}`}>{supplierContact.phoneMobile}</a></td>
          <td><a href={`tel:${supplierContact.phoneBusiness}`}>{supplierContact.phoneBusiness}</a></td>
          <td><a href={`https://www.google.com/maps/search/?api=1&query=${supplierContact.country} ${supplierContact.city} ${supplierContact.street}`} target="blank">{supplierContact.country} {supplierContact.zipCode}-{supplierContact.city} {supplierContact.street}</a></td>
          <td><a href={`${supplierContact.website}`} target="blank">{supplierContact.website}</a></td>
        </tr>
      </tbody>
      <SupplierContactQRModal isOpen={modalIsOpen} onRequestClose={closeModal} supplierContact={supplierContact} />
    </React.Fragment>
  )
}

export { SupplierContact as default }