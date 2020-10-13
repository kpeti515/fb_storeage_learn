const projectReducer = (state, action) => {
  switch (action.type) {
    case 'LIST_PROJECT':
      return action.pswList
    default:
      break;
  }
}

export {projectReducer as default}