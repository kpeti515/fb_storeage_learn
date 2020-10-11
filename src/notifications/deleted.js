import { toast } from 'react-toastify';

const deleteNotification = () => {
  toast.dismiss()
  toast.error('Törölve', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}

export default deleteNotification