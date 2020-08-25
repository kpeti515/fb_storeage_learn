import React from 'react'
import SupplierContactQRModal from './SupplierContact_QRmodal'
// import { supplierContactDb } from '../firebase/firebase'
const SupplierContact = ({
  supplierContact
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <h3>{supplierContact.title} {supplierContact.firstName} {supplierContact.lastName}, {supplierContact.supplier}</h3>
      <p>E-mail:<a href={`mailto:${supplierContact.email}`}>{supplierContact.email}</a></p>
      <p>Mobil: <a href={`tel:${supplierContact.phoneMobile}`}>{supplierContact.phoneMobile}</a></p>
      <p>Munkahelyi szám: <a href={`tel:${supplierContact.phoneBusiness}`}>{supplierContact.phoneBusiness}</a></p>
      <p>Cég címe: <a href={`https://www.google.com/maps/search/?api=1&query=${supplierContact.country} ${supplierContact.city} ${supplierContact.street}`} target="blank">{supplierContact.country} {supplierContact.zipCode}-{supplierContact.city} {supplierContact.street}</a></p>
      <p>Weboldal: <a  href={`https://${supplierContact.website}`} target="blank">{supplierContact.website}</a></p>
      <button onClick={openModal}>QR kóddal felvétel a telefonkönyvbe</button>
      <SupplierContactQRModal isOpen={modalIsOpen} onRequestClose={closeModal} supplierContact={supplierContact}/>
    </div>
  )
}

export { SupplierContact as default }