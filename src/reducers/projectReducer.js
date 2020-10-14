const projectReducer = (state, action) => {
  switch (action.type) {
    case 'LIST_PROJECT':
      return action.projectList
    default:
      break;
  }
}

export {projectReducer as default}