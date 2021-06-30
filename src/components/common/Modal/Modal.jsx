import styles from './Modal.module.css';

export function Modal({children, active, setActive, text,}) {
    return (
        <div className={active ? `${styles.modal} ${styles.active}` : styles.modal}
             onClick={() => setActive(false)}>
            <div className={active ? `${styles.modalContent} ${styles.modalContentActive}` : styles.modalContent}
                 onClick={(e) => e.stopPropagation()}>
                <p className={styles.text}>{text}</p>
                {children}
            </div>
        </div>
    );
}