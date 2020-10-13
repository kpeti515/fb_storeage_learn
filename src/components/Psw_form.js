
import React from 'react';
import { useForm } from 'react-hook-form'
import { pswDb, pswStore, storageRef } from '../firebase/firebase'
import { v4 as uuidv4 } from 'uuid';
import modifyNotification from './../notifications/modified'
import successNotification from './../notifications/saved'
const PswForm = (props) => {

  const { handleSubmit, register } = useForm()

  const onSubmit = async (data) => {

    const itemName = uuidv4()

    const fileExtension = (filePath) => {
      const filePathParts = filePath.split('.')
      return filePathParts.length < 2 ? "" : ('.' + filePathParts.pop())
    }
    const file = data.psw[0];
    console.log(file);
    let fileRef = pswStore.child(itemName + fileExtension(file.name))
    let docRef = pswDb.doc(itemName)

    const inputs = {
      'project': data.project,
      'customer': data.customer,
      'drawingNumber': data.drawingNumber,
      'pswStatus': data.pswStatus,
      'supplier': data.supplier,
      'validationDate': data.validationDate,
      'fileExtension': fileExtension(file.name)
    }
    
    let create = true
    if (props.psw) {
      docRef = pswDb.doc(props.psw.id)
      docRef.update(inputs)

      pswStore.child(`${props.psw.id}${props.psw.fileExtension}`).delete().then(function () {
        console.log("Document successfully deleted!")
      }).catch(function (error) {
        console.error("Error removing document: ", error);
      })
      fileRef = pswStore.child(props.psw.id + fileExtension(file.name))
      create = false
    }

    await fileRef.put(file)
    await docRef.set({
      fileUrl: `${storageRef}${fileRef.location.path}`,
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
      <div>
        <label htmlFor="datePicker">PSW státusz</label>
        <div>
          <label>Elfogadott
            <input
              name="pswStatus"
              type="radio"
              value="Elfogadott"
              required
              ref={register}
              defaultChecked={props.psw && props.psw.pswStatus === 'Elfogadott' ? true : false}
            />
          </label>
          <label> Feltételesen elfogadott
            <input
              name="pswStatus"
              type="radio"
              value="Feltételesen elfogadott"
              required
              ref={register}
              defaultChecked={props.psw && props.psw.pswStatus === 'Feltételesen elfogadott' ? true : false}
            />
          </label>
          <label>Elutasított
            <input
              name="pswStatus"
              type="radio"
              value="Elutasított"
              required
              ref={register}
              defaultChecked={props.psw && props.psw.pswStatus === 'Elutasított' ? true : false}
            />
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="datePicker">PSW aláírásának ideje Linamar által</label>
        <input
          type="date"
          name="validationDate"
          ref={register}
          defaultValue={props.psw && props.psw.validationDate}
        />
      </div>
      <label htmlFor="psw">PSW csatolása:</label>
      <input
        required
        ref={register}
        type="file"
        name="psw" />
      <button>Submit</button>
      <button onClick={props.onRequestClose}>Mégse</button>
    </form>
  )
}

export { PswForm as default }