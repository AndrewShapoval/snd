import React from "react";
import styles from './LeftColumn.module.css';
import {MyLink} from './MyLink/MyLink';
import {AvatarBlock} from "./AvatarBlock/AvatarBlock";
import automotiveImg from "../../../img/automotive.svg"
import businessImg from "../../../img/business.svg"
import careerEmploymentImg from "../../../img/careerEmployment.svg"
import cartoonsImg from "../../../img/cartoons.svg"
import comicImg from "../../../img/comic.svg"
import educationImg from "../../../img/education.svg"

const arr = [
    {title: 'Automotive', icon: automotiveImg},
    {title: 'Business', icon: businessImg},
    {title: 'Career / Employment', icon: careerEmploymentImg},
    {title: 'Cartoons', icon: cartoonsImg},
    {title: 'Comic Strips', icon: comicImg},
    {title: 'Education', icon: educationImg},
    {title: 'Entertaiment', icon: null},
    {title: 'Environment', icon: null},
    {title: 'Family', icon: null},
    {title: 'Fashion', icon: null},
    {title: 'Food', icon: null},
    {title: 'Health', icon: null},
    {title: 'International', icon: null},
    {title: 'Law', icon: null},
    {title: 'Lifestyle', icon: null},
    {title: 'Parenting', icon: null},
    {title: 'Pets', icon: null},
    {title: 'Poetry', icon: null},
    {title: 'Politics', icon: null},
    {title: 'Real Estate', icon: null},
    {title: 'Religions', icon: null},
    {title: 'Science', icon: null},
    {title: 'Special Coverage', icon: null},
    {title: 'Sports', icon: null},
    {title: 'Tehnology', icon: null},
    {title: 'Travel', icon: null},
    {title: 'U.S. Electronics’12', icon: null},
    {title: 'Weather', icon: null}
];

export function LeftColumn() {
    return (
        <div className={styles.leftColumnBlock}>
            <AvatarBlock/>
            <div className={styles.leftColumn}>
                <div className={styles.container}>
                    {
                        arr.map((t, index) =>
                            <MyLink key={index} icon={t.icon} title={t.title} counter={15}/>)
                    }
                </div>
            </div>
        </div>
    );
}
