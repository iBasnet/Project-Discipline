import './Alerts.css'
import { MdVerified } from "react-icons/md";
import { MdClose } from "react-icons/md";

type AlertsProps = {
    setShowAlert: (show: boolean) => void;
}

export default function Alerts({ setShowAlert }: AlertsProps) {
    return (
        <div className='alert--success'>
            <MdVerified className='icon--verified' />
            <p className='alert--message'>Successfully submitted!</p>
            <MdClose className='icon--close' onClick={() => setShowAlert(false)} />
        </div>
    )
}
