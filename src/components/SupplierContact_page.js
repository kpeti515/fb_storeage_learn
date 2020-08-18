import React, { useEffect, useReducer } from 'react';
import supplierContactReducer from '../reducers/supplierContactReducer'
import SupplierContactModal from './SupplierContact_modal'
import FirebaseContext from '../context/FirebaseContext'
import SupplierContactList from './SupplierContact_list'
import { supplierContactDb } from '../firebase/firebase'


function SupplierContactPage() {
  const [supplierContact, dispatch] = useReducer(supplierContactReducer, [])

  useEffect(() => {

    const unsubscribeSupplierContact = supplierContactDb
      .onSnapshot((snapshot) => {
        const supplierContactList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        if (supplierContactList) {
          dispatch({ type: 'LIST_SUPPLIERCONTACT', supplierContactList })
        }
      })
    
    return () => unsubscribeSupplierContact()
  }, [])


  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openModal}>Beszállítói kapcsolat felvétele</button>
      <FirebaseContext.Provider value={{ supplierContact, dispatch }}>
        <h1>Beszállítói kapcsolatok</h1>
        <SupplierContactList />
      </FirebaseContext.Provider>
      <SupplierContactModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
  )
}

export { SupplierContactPage as default }