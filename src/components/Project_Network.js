import React, {useReducer, useEffect} from 'react'
import { projectDb } from '../firebase/firebase'
import projectReducer from '../reducers/projectReducer'
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
  const newProject = () => {
    
  }

  return (
    <>
      <button onClick={newProject}>Új projekt felvétele</button>
      <ProjectModal />
    </>
  )
}

export default ProjectNetwork