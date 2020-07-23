import React from 'react';
import PswModal from './Psw_modal'

function PswPage(){
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }

  return (
    <>
    <button onClick={openModal}>PSW rögzítése</button>
      <PswModal isOpen={modalIsOpen} onRequestClose={closeModal}/>
    </>
  )
}

export {PswPage as default}