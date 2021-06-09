const pswReducer = (state, action) => {
  switch (action.type) {
    case 'LIST_PSW':
      return action.pswList
    case 'LIST_SUPPLIERCONTACT':
      return action.supplierContactList
    case 'ADD_PSW':
      return [
        ...state,
        {
          project: action.project,
          customer: action.customer,
          supplier: action.supplier,
          drawingNumber: action.drawingNumber,
          validationDate: action.validationDate,
          validUntil: action.validUntil,
          linkToFile: action.linkToFile,
          id: action.id
        }
      ]
    case 'REMOVE_PSW':
      return state.filter((psw) => psw.id !== action.id)
    case 'SET_PSW':
      return action.psw
    default:
      break
  }
}

export { pswReducer as default }