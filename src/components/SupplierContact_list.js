import React, { useContext } from 'react'
import SupplierContactItem from './SupplierContact_item'
import FirebaseContext from '../context/FirebaseContext'

const SupplierContactList = () => {
  const { supplierContact } = useContext(FirebaseContext)

  return supplierContact.map((supplierContact) => (
    <SupplierContactItem key={supplierContact.id} supplierContact={supplierContact} />
  ))
}

export { SupplierContactList as default }