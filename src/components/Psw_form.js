
import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'
import { useForm } from 'react-hook-form'
import { pswRef } from '../firebase/firebase'
import { v4 as uuidv4 } from 'uuid';
import SingleDatePicker from './SingleDatePicker'


const PswForm = (props) => {
 
  const { handleSubmit, register } = useForm()

  const onSubmit = async (data) => {
    // console.log(props)
    // console.log(data)
    const fileExtension = (filePath) => {
      const filePathParts = filePath.split('.')
      return filePathParts.length < 2 ? "" : ('.' + filePathParts.pop())
    }
    const fileRef = pswRef.child(uuidv4() + fileExtension(data.psw[0].name)) // TODO: metadatába lementeni: datepicker
    const addMeta = {
      customMetadata: {
        'project': data.project,
        'customer': data.customer,
        'drawingNumber': data.drawingNumber,
        'pswStatus': data.pswStatus,
        'supplier': data.supplier
      }
    }

    await fileRef.put(data.psw[0])
    await fileRef.updateMetadata(addMeta)
      .then(props.onRequestClose)
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
    <input name="pswStatus" type="radio" value="Elfogadott" ref={register} />
          </label>
          <label> Feltételesen elfogadott
    <input name="pswStatus" type="radio" value="Feltételesen elfogadott" ref={register} />
          </label>
          <label>Elutasított
    <input name="pswStatus" type="radio" value="Elutasított" ref={register} />
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="datePicker">PSW aláírásának ideje Linamar által</label>
        <SingleDatePicker />
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