import React from 'react'
// import { supplierContactDb } from '../firebase/firebase'
const SupplierContact = ({
  supplierContact
}) => {
  

  return (
    <div>
      <h3>Vezetéknév: {supplierContact.firstName}</h3>
      <p>Keresztnév: {supplierContact.lastName}</p>
      <p>Titulus: {supplierContact.title}</p>
      <p>Utca: {supplierContact.street}</p>
      <p>Irányítószám: {supplierContact.zipCode}</p>
      <p>Város: {supplierContact.city}</p>
      <p>Ország: {supplierContact.country}</p>
      <p>Beszállító: {supplierContact.supplier}</p>
      <p>Üzleti e-mail cím: {supplierContact.email}</p>
      <p>Mobilszám: {supplierContact.phoneMobile}</p>
      <p>Munkahelyi szám: {supplierContact.phoneBusiness}</p>
      <p>Weboldal: {supplierContact.website}</p>
      <img src={`http://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=BEGIN%3AVCARD%0AVERSION%3A2.1%0AFN%3A${supplierContact.firstName}+${supplierContact.lastName}%0AN%3Alastname%3Bfirstname%0ATITLE%3A${supplierContact.title}%0ATEL%3BCELL%3A${supplierContact.phoneMobile}%0ATEL%3BWORK%3BVOICE%3A${supplierContact.phoneBusiness}%0AEMAIL%3BWORK%3BINTERNET%3A${supplierContact.email}%0AURL%3A${supplierContact.website}%0AADR%3A%3B%3B${supplierContact.street}%3B${supplierContact.city}%3B%3B${supplierContact.zipCode}%3B${supplierContact.country}%0AORG%3A${supplierContact.supplier}%0AEND%3AVCARD%0A&qzone=1&margin=0&size=400x400&ecc=L`}/>
    </div>
  )
}

export { SupplierContact as default }