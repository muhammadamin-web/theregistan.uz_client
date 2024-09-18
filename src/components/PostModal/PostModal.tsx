import modal from '../../assets/img/modal250.png'
import './PostModal.scss'
// import banner from '../../assets/img/banner.png'
import banner2 from '../../assets/img/modal2_mobile.png'
import { useEffect, useState } from 'react'

const PostModal = () => {

    const [img, setImg] = useState(modal)
    useEffect(() => {
        if (window.innerWidth > 2300) {
            setImg(modal)
        } else if (window.innerWidth < 600) {
            setImg(banner2)
        }
    }, [])
    return (
        <div className="postmodal">
            <a href="https://t.me/theregistan">
                <img className='postmodal_imgg' src={img} alt="" />
            </a>

            {/* <div className="postmodal_box">
                <div className="postmodal_img">
                    <img src={modal} alt="" />
                </div>
                <div className="postmodal_card">
                    <div className="postmodal_card_text">
                        <h2 className='postmodal_title'> Подпишитесь на <br />
                            The Registan в telegram
                        </h2>
                        <p className="postmodal_text">
                            Ежедневные подборки лучших <br />
                            событий и идеи для прогулок по городу
                        </p>
                    </div>
                    <a href="https://t.me/theregistan" className="postmodal_link">Подписаться</a>
                </div>

            </div> */}
        </div>
    )
}

export default PostModal