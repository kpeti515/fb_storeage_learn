import React from 'react';
import moment from 'moment'
import PswModal from './Psw_modal';

const PswForm = () => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <React.Fragment >
      <button onClick={openModal}>PSW rögzítése</button>
      <PswModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="PSW hozzáadása" />
    </React.Fragment>
  )
}

export { PswForm as default }