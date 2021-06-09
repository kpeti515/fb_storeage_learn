import React from 'react'
import { projectDb } from '../firebase/firebase'
import DeleteConfirmationModal from './DeleteConfirmationModal'
import ProjectModal from './Project_Modal'
import deleteNotification from './../notifications/deleted'

const ProjectItem = ({
  project
}) => {
  const [modalIsOpenForDelete, setIsOpenForDelete] = React.useState(false)
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openProjectModal() {
    setIsOpen(true)
  }
  function closeProjectModal() {
    setIsOpen(false)
  }
  function openDeleteModal() {
    setIsOpenForDelete(true)
  }
  function closeDeleteModal() {
    setIsOpenForDelete(false)
  }
  function deleteEntity() {

    projectDb.doc(project.id).delete().then(deleteNotification()).catch(function (error) {
      console.error("Error removing document: ", error)
    })
  }
  console.log(project)
  return (
    <React.Fragment>
      <tbody>
        <tr>
          <td>{project.drawingNumber}</td>
          <td>{project.supplier}</td>
          <td>{project.project}</td>
          <td>{project.customer}</td>

          <td><button onClick={openProjectModal}>Módosítás</button></td>
          <td><button onClick={openDeleteModal}>Törlés</button></td>
        </tr>
      </tbody>
      <ProjectModal project={project} isOpen={modalIsOpen} onRequestClose={closeProjectModal} />
      <DeleteConfirmationModal isOpen={modalIsOpenForDelete} onRequestClose={closeDeleteModal} deleteEntity={deleteEntity} />
    </React.Fragment>
  )
}

export { ProjectItem as default }