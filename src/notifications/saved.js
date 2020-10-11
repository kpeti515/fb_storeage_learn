import { toast } from 'react-toastify';

const successNotification = () => {
  toast.success('Mentés kész!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}

export default successNotification