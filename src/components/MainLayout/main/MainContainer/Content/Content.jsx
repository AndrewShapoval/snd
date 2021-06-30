import styles from './Content.module.css';
import {Card} from './Card/Card';
import {TopAutorCard} from './TopAutorCard/TopAutorCard';

const text = ['Dilemma #1: Does It Make Sense To Trade In A Vehicle For Something That Gets Better Mileage? Absolutely Not!'];
const text2 = ['Gas Dilemma #1: Does It Make Sense To Trade In A Vehicle For Something That Gets Better Mileage? Absolutely Not! Advantages And Disadvantages Of Home Based Businesses. Advantages And Disadvantages Of Home Based Businesses'];
const textTopAutor = ['Andy Cowan, an award-winning writer, whose credits include Cheers and Seinfeld, regularly...'];

export function Content() {
    return (
        <div className={styles.contentBlock}>
            <div className={styles.automotiveEducation}>
                <div className={styles.automotive}>
                    <h5 className={styles.title}>AUTOMOTIVE</h5>
                    <Card text={text}/>
                    <Card text={text}/>
                </div>
                <div className={styles.education}>
                    <h5 className={styles.title}>EDUCATION</h5>
                    <Card text={text}/>
                    <Card text={text}/>
                </div>
            </div>
            <div className={styles.business}>
                <h5 className={styles.title}>BUSINESS</h5>
                <Card text={text}/>
                <Card text={text}/>
                <Card text={text}/>
                <Card text={text2}/>
            </div>
            <div className={styles.topAutorsPolitics}>
                <div>
                    <h5 className={styles.title}>TOP AUTORS</h5>
                    <TopAutorCard text={textTopAutor}/>
                    <TopAutorCard text={textTopAutor}/>
                    <TopAutorCard text={textTopAutor}/>
                    <TopAutorCard text={textTopAutor}/>
                </div>
                <div>
                    <h5 className={styles.title}>POLITICS</h5>
                    <Card text={text}/>
                    <Card text={text}/>
                </div>
            </div>
        </div>
    );
}
