import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function notify(props) {
  const {status, message} = props;
  const notify = () => toast(`${message}`, {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    type: status
  });;

  return notify();
}