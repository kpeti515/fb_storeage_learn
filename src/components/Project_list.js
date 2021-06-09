import React, { useContext } from 'react'
import ProjectItem from './Project_item'
import FirebaseContext from '../context/FirebaseContext'

const ProjectList = () => {
  const { project } = useContext(FirebaseContext)

  return project.map((project) => (
    <ProjectItem key={project.id} project={project} />
  ))
}

export { ProjectList as default }