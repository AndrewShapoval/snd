import styles from './AvatarBlock.module.css';
import avatarPhoto3Img from "../../../../img/avatarPhoto3.gif"

export function AvatarBlock() {
    return (
        <div className={styles.avatarBlock}>
            <div className={styles.avatar}>
                <div className={styles.avatarPhoto}>
                    <img src={avatarPhoto3Img} alt="logo" width="40" height="40"/>
                </div>
                <div className={styles.avatarInfo}>
                    <div className={styles.avatarName}>Paul M. J.</div>
                    <button className={styles.avatarButton}>logout</button>
                </div>
            </div>
        </div>
    );
}
