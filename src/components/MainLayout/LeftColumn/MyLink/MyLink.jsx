import styles from './MyLink.module.css';

export function MyLink({icon, title, counter}) {
    return (
        <div className={styles.myLinkBlock}>
            {
                icon
                    ? <img src={icon} alt="logo" width="22" height="22"/>
                    : <div className={styles.circle}/>
            }
            <span className={styles.a}>{title}</span>
            <div className={styles.counter}>{counter}</div>
        </div>
    );
}
