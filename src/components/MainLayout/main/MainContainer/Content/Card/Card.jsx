import styles from './Card.module.css';
import {useState} from "react";
import avatarPhoto2Img from "../../../../../../img/avatarPhoto2.jpg"
import speechImg from "../../../../../../img/speech.png"
import eye3xImg from "../../../../../../img/eye@3x.png"

export function Card({text}) {

    const [cardActive, setCardActive] = useState(false)

    return (
        <div className={styles.cards}>
            <div className={styles.card} onMouseMove={() => setCardActive(true)}>
                <div className={styles.container}>
                    <div className={styles.avatarName}>
                        <div className={styles.image}>
                            <img src={avatarPhoto2Img} alt="logo" width="30" height="30"/>
                        </div>
                        <span className={styles.name}>by Nina Gass</span>
                    </div>
                    <div className={styles.text}>
                        {text}
                    </div>
                </div>
                {cardActive
                    ? <div className={styles.cardActive} onMouseLeave={() => setCardActive(false)}>
                        <div className={styles.containerActive}>
                            <div className={styles.avatarName}>
                                <div className={styles.image}>
                                    <img src={avatarPhoto2Img} alt="logo" width="30" height="30"/>
                                </div>
                                <span className={styles.name}>by Nina Gass</span>
                            </div>
                            <div className={styles.text}>
                                {text}
                            </div>
                        </div>
                        <div className={styles.messageLike}>
                            <div className={styles.message}>
                                <img src={speechImg} alt="logo" width="15" height="15"/>
                                <p className={styles.textStyle}>123</p>
                            </div>
                            <div className={styles.like}>
                                <img src={eye3xImg} alt="logo" width="15" height="9"/>
                                <p className={styles.textStyle}>4 K</p>
                            </div>
                        </div>
                    </div>
                    : <></>}
            </div>
        </div>
    );
}
