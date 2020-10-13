import React from 'react'
import { useForm } from 'react-hook-form'
import { projectDb } from '../firebase/firebase'
import { v4 as uuidv4 } from 'uuid';
import modifyNotification from './../notifications/modified'
import successNotification from './../notifications/saved'
const ProjectForm = (props) => {

  const { handleSubmit, register } = useForm()

  const onSubmit = async (data) => {

    const itemName = uuidv4()

    const file = data.psw[0];
    console.log(file);
    let docRef = projectDb.doc(itemName)

    const inputs = {
      'project': data.project,
      'customer': data.customer,
      'drawingNumber': data.drawingNumber,
      'supplier': data.supplier
    }
    
    let create = true
    if (props.psw) {
      docRef = projectDb.doc(props.psw.id)
      docRef.update(inputs)
      create = false
    }

    await docRef.set({
      ...inputs
    })
    props.onRequestClose()

    if (create) {
      successNotification()
    } else {
      modifyNotification()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Projekt"
        ref={register}
        required
        autoFocus
        name="project"
        defaultValue={props.psw && props.psw.project}
      />
      <input
        type="text"
        placeholder="Rajzszám"
        ref={register}
        required
        name="drawingNumber"
        defaultValue={props.psw && props.psw.drawingNumber}
      />
      <input
        type="text"
        placeholder="Beszállító"
        ref={register}
        required
        name="supplier"
        defaultValue={props.psw && props.psw.supplier}
      />
      <input
        type="text"
        placeholder="Vevő"
        ref={register}
        required
        name="customer"
        defaultValue={props.psw && props.psw.customer}
      />
      <button>Submit</button>
      <button onClick={props.onRequestClose}>Mégse</button>
    </form>
  )
}

export { ProjectForm as default }