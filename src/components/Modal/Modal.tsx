
import modal from '../../assets/img/modal_mobile.png'
import './Modal.scss'
import modal2 from '../../assets/img/modal3.png'

import { TfiClose } from "react-icons/tfi";
import { useEffect, useState } from 'react';
const Modal = ({ showModal, handleClose }: any) => {
    if (!showModal) return null;

    const [img, setImg] = useState(modal2)


    useEffect(() => {
        if (window.innerWidth < 600) {
            setImg(modal)
        }
    }, [])
    return (
        <div className="modal">
            <div className='modal_box'>
                <img src={img} alt="" className="modal_imgg" />
                <TfiClose className='modal_close' onClick={handleClose} />
            </div>
        </div>
    )
}

export default Modal