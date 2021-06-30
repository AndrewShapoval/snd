import styles from './VideoGraph.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useState} from 'react';
import {Modal} from '../../../common/Modal/Modal';
import {GraphBlock} from "./GraphBlock/GraphBlock";
import Video_1Img from "../../../../img/Video_1.png"
import Video_2Img from "../../../../img/Video_2.png"
import playImg from "../../../../img/play.svg"

const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export function VideoGraph() {
    const [modalActive, setModalActive] = useState(false);
    const [iframe, setIframe] = useState();
    const setModalActiveHandler = () => {
        setModalActive(true);
    };

    return (
        <>
            <Modal active={modalActive} setActive={setModalActive}>
                {iframe === 'iframe1'
                    ? (
                        <iframe
                            src="https://player.vimeo.com/video/216185150?title=0&byline=0&portrait=0"
                            width="640"
                            height="360"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        />
                    )
                    : (
                        <iframe
                            src="https://player.vimeo.com/video/216184232?title=0&byline=0&portrait=0"
                            width="640"
                            height="360"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        />
                    )}
            </Modal>
            <div className={styles.videoGraph}>
                <div className={styles.headerColor}/>
                <div className={styles.container}>
                    <div className={styles.video}>
                        <div className={styles.containerSlide}>
                            <Slider {...settings}>
                                <div className={styles.slide}>
                                    <div className={styles.slideImage}>
                                        <img className={styles.img} src={Video_1Img} alt="logo"/>
                                    </div>
                                    <ButtonWatchVideo
                                        setModalActiveHandler={setModalActiveHandler}
                                        iframe="iframe1"
                                        setIframe={setIframe}
                                    />
                                </div>
                                <div className={styles.slide}>
                                    <div className={styles.slideImage}>
                                        <img className={styles.img} src={Video_2Img} alt="logo"/>
                                    </div>
                                    <ButtonWatchVideo
                                        setModalActiveHandler={setModalActiveHandler}
                                        iframe="iframe2"
                                        setIframe={setIframe}
                                    />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <GraphBlock/>
                </div>
            </div>
        </>
    );
}

function ButtonWatchVideo({setModalActiveHandler, iframe, setIframe}) {
    const onClickHandler = () => {
        setIframe(iframe);
        setModalActiveHandler();
    };

    return (
        <div onClick={onClickHandler} className={styles.button}>
            <img src={playImg} alt="logo" width="30" height="30"/>
            <div className={styles.text}>WATCH THE VIDEO</div>
        </div>
    );
}
