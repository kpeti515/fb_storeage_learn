import React, { useEffect, useReducer } from 'react';
import pswReducer from '../reducers/pswReducer'
import PswModal from './Psw_modal'
import FirebaseContext from '../context/FirebaseContext'
import PswList from './PswList'
import { pswDb } from '../firebase/firebase'


function PswPage() {
  const [psw, dispatch] = useReducer(pswReducer, [])

  useEffect(() => {

    const unsubscribePsw = pswDb
      .onSnapshot((snapshot) => {
        const pswList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        if (pswList) {
          dispatch({ type: 'LIST_PSW', pswList })
        }
      })

    return () => unsubscribePsw()
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
      <button onClick={openModal}>PSW rögzítése</button>
      <FirebaseContext.Provider value={{ psw, dispatch }}>
        <h1>PSW-k</h1>
        <table>
          <thead>
            <tr>
              <th>Rajzszám</th>
              <th>Beszállító</th>
              <th>Projekt</th>
              <th>Vevő</th>
              <th>Link</th>
            </tr>
          </thead>
          <PswList />
        </table>
      </FirebaseContext.Provider>
      <PswModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
  )
}

export { PswPage as default }