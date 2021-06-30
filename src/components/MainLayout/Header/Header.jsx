import React from "react";
import styles from './Header.module.css';
import {useState} from "react";
import globalImg from "../../../img/global.svg"
import logo2Img from "../../../img/logo-2.svg"
import searchImg from "../../../img/search.png"
import {Select} from "../../common/Select/Select";

export function Header() {

    const items = [
        {id: 1, tittle: "Language"},
        {id: 2, tittle: "Russia"},
        {id: 3, tittle: "English"},
        {id: 4, tittle: "Polish"}
    ]

    return (
        <nav className={styles.header}>
            <div className={styles.container}>
                <div className={styles.language}>
                    <img src={globalImg} alt="logo" width="16" height="16"/>
                    <Select items={items}/>
                </div>
                <div className={styles.stringName}>
                    <h1 className={styles.string}>
                        The<span className={styles.name}>Syndicated</span>News
                    </h1>
                    <img src={logo2Img} alt="logo" width="25" height="30"/>
                </div>
                <div className={styles.inputStyle}>
                    <input type="text" className={styles.input} placeholder="Search"/>
                    <button className={styles.button}>
                        <img src={searchImg} alt="logo" width="14" height="14"/>
                    </button>
                </div>
            </div>
        </nav>
    );
}
