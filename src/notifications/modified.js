import { toast } from 'react-toastify'

const modifyNotification = () => {
  toast.dismiss()
  toast.warn('Módosítva', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}

export default modifyNotification