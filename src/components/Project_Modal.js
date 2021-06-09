import React from 'react'
import Modal from 'react-modal'
import ProjectForm from './Project_form'

Modal.setAppElement('#root')
const ProjectModal = (props) => {

  return (
    <Modal
      isOpen={props.isOpen}
      contentLabel="Project"
      onRequestClose={props.onRequestClose}
    >
      <ProjectForm {...props} />
    </Modal>
  )
}

export { ProjectModal as default }