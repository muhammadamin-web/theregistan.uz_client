import modal from '../../assets/img/modal.png'
import './PostModal.scss'
import banner from '../../assets/img/banner.png'

const PostModal = () => {
    return (
        <div className="postmodal">
            <img className='postmodal_imgg' src={banner} alt="" />

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