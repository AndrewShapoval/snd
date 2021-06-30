import styles from './Footer.module.css';

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.link}>
                        <span className={styles.a}>HOME</span>
                        <span className={styles.a}>ABOUT US</span>
                        <span className={styles.a}>FAQ</span>
                        <span className={styles.a}>CONTACT US</span>
                        <span className={styles.a}>TERMS OF SERVICE</span>
                        <span className={styles.a}>SIGN-UP: WRITER</span>
                        <span className={styles.a}>BUYER</span>
                    </div>
                    <div className={styles.text}>
                        Syndicated News was founded on the premise that the industry for
                        publishers and writers is changing rapidly, and in fact it has changed more in the last eight
                        years than it has in the previous one hundred. Publishers are adapting their business models to
                        meet the shift in reading habits and to keep pace with the increasing demand for content
                        diversity in their publications.
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.address}>
                        Empire State Building
                        <p>350 Fifth Ave, Suite 7313</p>
                        <p>New York, NY 10118</p>
                        <p>phone: (800) 704-6512</p>
                    </div>
                    <div className={styles.email}>inquiry@thesyndicatednews.com</div>
                </div>
            </div>
        </div>
    );
}
