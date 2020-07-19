import React from 'react';
import { useForm } from 'react-hook-form'
import { pswRef } from '../firebase/firebase'
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'

const PswForm = () => {
  const { handleSubmit, register } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    const fileExtension = (filePath) => {
      const filePathParts = filePath.split('.')
      return filePathParts.length < 2 ? "" : ('.' + filePathParts.pop()) 
    }
    console.log('Fájlkiterjesztés:' + fileExtension(data.psw[0].name));
    const fileRef = pswRef.child(uuidv4() + fileExtension(data.psw[0].name)) // TODO: metadatába lementeni: data.supplier+ data.drawingNumber + datepicker ++ csak PDF-et fogadjon el
    fileRef.put(data.psw[0]).then(() => {
      console.log('File uploaded:');
    })
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