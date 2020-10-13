import React, {useReducer, useEffect} from 'react'
import { projectDb } from '../firebase/firebase'
import projectReducer from '../reducers/projectReducer'
import FirebaseContext from '../context/FirebaseContext'
import ProjectModal from './Project_Modal'

function ProjectNetwork() {
  const [project, dispatch] = useReducer(projectReducer, [])
  useEffect(() => {
    const unsubscribePsw = projectDb
      .onSnapshot((snapshot) => {
        const projectList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        if (projectList) {
          dispatch({ type: 'LIST_PROJECT', projectList })
        }
      })

    return () => unsubscribePsw()
  }, [])
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openProjectModal() {
    setIsOpen(true);
  }
  function closeProjectModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openProjectModal}>Új projekt felvétele</button>
      <FirebaseContext.Provider value={{ project, dispatch }}>
        <h1>Projectek</h1>
        
      </FirebaseContext.Provider>
      <ProjectModal isOpen={modalIsOpen} onRequestClose={closeProjectModal}/>
    </>
  )
}

export default ProjectNetwork