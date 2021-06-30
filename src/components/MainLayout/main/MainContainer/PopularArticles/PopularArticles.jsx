import styles from './PopularArticles.module.css';
import speechImg from "../../../../../img/speech-bubble-with-text-lines@3x.png"

export function PopularArticles() {
    return (
        <div className={styles.block}>
            <div className={styles.header}>
                <p className={styles.month}>SEPT.</p>
                <p className={styles.title}>POPULAR ARTICLES</p>
            </div>
            <div>
                <div className={styles.flex}>
                    <div className={styles.date}>27.09</div>
                    <div className={styles.popularArticles}>Gas Dilemma #1: Does It Make Sense To Trade In A Vehicle For
                        Something That Gets Better
                        Mileage? Absolutely Not!
                    </div>
                    <img className={styles.img} src={speechImg} alt="logo" width="15" height="15"/>
                    <div className={styles.number}>14</div>
                </div>
                <div className={styles.flex}>
                    <div className={styles.date}>23.09</div>
                    <div className={styles.popularArticles}>Don't Let Today's Grocery Prices Bust Your Budget</div>
                </div>
                <div className={styles.flex}>
                    <div className={styles.date}>21.09</div>
                    <div className={styles.popularArticles}>Pay Off Credit Card Debt Through Peer To Peer Lending</div>
                </div>
                <div className={styles.flex}>
                    <div className={styles.date}>19.09</div>
                    <div className={styles.popularArticles}>Advantages And Disadvantages Of Home Based Businesses</div>
                </div>
                <div className={styles.flex}>
                    <div className={styles.date}>11.09</div>
                    <div className={styles.popularArticles}>Looking Back - Just a Boomer Moment In Time - The World of
                        Home Entertainment andCommunication</div>
                </div>
            </div>
        </div>
    );
}
