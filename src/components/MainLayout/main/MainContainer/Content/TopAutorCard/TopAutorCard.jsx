import styles from './TopAutorCard.module.css';
import avatarPhotoImg from "../../../../../../img/avatarPhoto.png"

export function TopAutorCard({text}) {
    return (
        <div className={styles.card}>
            <div className={styles.avatar}>
                <img src={avatarPhotoImg} alt="logo" width="50" height="50"/>
            </div>
            <div className={styles.textName}>
                <div className={styles.name}>Andy Cowan</div>
                <div className={styles.text}>{text}</div>
            </div>
        </div>
    );
}
