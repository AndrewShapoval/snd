import styles from './MediaAutors.module.css';

export function MediaAutors({ logoSrc, title, text }) {
    return (
        <div className={styles.mediaAutors}>
            <div className={styles.img}>
                <img src={logoSrc} alt="logo" width="50" height="50" />
            </div>
            <div className={styles.titleTextBlock}>
                <div className={styles.title}>{title}</div>
                <div className={styles.text}>{text}</div>
                <div>
                    <button className={`${styles.button} ${styles.btnColorSignup}`}>Sign up!</button>
                    <button className={`${styles.button} ${styles.btnColorWatchTheVideo}`}>Watch the video</button>
                </div>
            </div>
        </div>
    );
}
