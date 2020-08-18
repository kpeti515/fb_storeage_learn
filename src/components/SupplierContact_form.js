
import React from 'react';
import { useForm } from 'react-hook-form'
import { supplierContactDb } from '../firebase/firebase'
import { v4 as uuidv4 } from 'uuid';

// Todo: value={moment().format("YYYY-MM-DD")} + onchange legyen beépítve a datepickerbe


const SupplierContactForm = (props) => {

  const { handleSubmit, register } = useForm()

  const onSubmit = async (data) => {
    const itemName = uuidv4()
    const docRef = supplierContactDb.doc(itemName)

    await docRef.set({
      ...data
    }).then(props.onRequestClose)
    console.log('uploaded!')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Keresztnév"
        ref={register}
        required
        autoFocus
        name="firstName"
      />
      <input
        type="text"
        placeholder="Vezetéknév"
        ref={register}
        required
        name="lastName"
      />
      <input
        type="text"
        placeholder="Titulus"
        ref={register}
        name="title"
      />
      <input
        type="text"
        placeholder="Beszállító cég neve"
        ref={register}
        required
        name="supplier"
      />
      <input
        type="text"
        placeholder="Ország"
        ref={register}
        name="country"
      /> 
      <input
      type="text"
      placeholder="Város"
      ref={register}
      name="city"
    />
     <input
        type="text"
        placeholder="utca"
        ref={register}
        name="street"
      />
       <input
        type="text"
        placeholder="Irányítószám"
        ref={register}
        name="zipCode"
      />
       <input
        type="text"
        placeholder="e-mail cím"
        ref={register}
        required
        name="email"
      />
       <input
        type="text"
        placeholder="Mobiltelefon szám"
        ref={register}
        required
        name="phoneMobile"
      />
      <input
        type="text"
        placeholder="Munkahelyi telefonszám"
        ref={register}
        name="phoneBusiness"
      />
      <input
        type="text"
        placeholder="Beszállító hivatalos weblapja"
        ref={register}
        name="website"
      />
      
      <button>Submit</button>
    </form>
  )
}

export { SupplierContactForm as default }