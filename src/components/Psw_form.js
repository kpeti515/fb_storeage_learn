
import React from 'react';
import { useForm } from 'react-hook-form'
import { pswDb, pswStore, storageRef } from '../firebase/firebase'
import { v4 as uuidv4 } from 'uuid';


const PswForm = (props) => {

  const { handleSubmit, register } = useForm()

  const onSubmit = async (data) => {
   

    const itemName = uuidv4()

    const fileExtension = (filePath) => {
      const filePathParts = filePath.split('.')
      return filePathParts.length < 2 ? "" : ('.' + filePathParts.pop())
    }
    const inputs = {
      'project': data.project,
      'customer': data.customer,
      'drawingNumber': data.drawingNumber,
      'pswStatus': data.pswStatus,
      'supplier': data.supplier,
      'validationDate': data.validationDate,
      'fileExtension': fileExtension(data.psw[0].name)
    }

    const fileRef = pswStore.child(itemName + fileExtension(data.psw[0].name))
    const docRef = pswDb.doc(itemName)

    await fileRef.put(data.psw[0])

    await docRef.set({
      fileUrl: `${storageRef}${fileRef.location.path}`,
      ...inputs
    });
    props.onRequestClose()

    console.log('uploaded!')
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
      />
      <input
        type="text"
        placeholder="Rajzszám"
        ref={register}
        required
        name="drawingNumber"
      />
      <input
        type="text"
        placeholder="Beszállító"
        ref={register}
        required
        name="supplier"
      />
      <input
        type="text"
        placeholder="Vevő"
        ref={register}
        required
        name="customer"
      />
      <div>
        <label htmlFor="datePicker">PSW státusz</label>
        <div>
          <label>Elfogadott
    <input name="pswStatus" type="radio" value="Elfogadott" required ref={register} />
          </label>
          <label> Feltételesen elfogadott
    <input name="pswStatus" type="radio" value="Feltételesen elfogadott" required ref={register} />
          </label>
          <label>Elutasított
    <input name="pswStatus" type="radio" value="Elutasított" required ref={register} />
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="datePicker">PSW aláírásának ideje Linamar által</label>
        <input type="date" name="validationDate" ref={register} />
      </div>
      <label htmlFor="psw">PSW csatolása:</label>
      <input
        required
        ref={register}
        type="file"
        name="psw" />
      <button>Submit</button>
    </form>
  )
}

export { PswForm as default }