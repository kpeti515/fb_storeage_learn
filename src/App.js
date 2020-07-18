import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form'
import 'firebase/analytics'
import 'firebase/database'
import 'firebase/storage'
import { pswRef } from './firebase/firebase'

function App() {
  const { handleSubmit, register } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    const fileRef = pswRef.child(data.psw[0].name)
    fileRef.put(data.psw[0]).then(() => {
      console.log('File uploaded:' + data.psw[0].name);
    })
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="psw">Select a file:</label>
          <input required ref={register} type="file" name="psw" />
          <button>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
