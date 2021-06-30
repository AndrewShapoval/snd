import React from 'react';
import styles from "./GraphBlock.module.css";
import {useState} from "react";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis} from "recharts";
import arrowGreenTopImg from "../../../../../img/arrow-green-top.svg"
import arrowRedBottomImg from "../../../../../img/arrow-red-bottom.svg"

const graphData = [
    {
        "name": "21",
        "uv": 700,
        "amt": 2100
    },
    {
        "name": "22",
        "uv": 1000,
        "amt": 2100
    },
    {
        "name": "23",
        "uv": 900,
        "amt": 2100
    },
    {
        "name": "24",
        "uv": 1200,
        "amt": 2100
    },
    {
        "name": "25",
        "uv": 1100,
        "amt": 2100
    }
]
const tickStyle = {fontSize: "8px", fontWeight: "normal", fill: '#fefefe'}

export function GraphBlock() {

    const [active, setActive] = useState("NASDAQ")

    return (
        <div className={styles.graphBlock}>
            <div className={styles.headerGraph}>
                <div>
                    <span className={active === "NASDAQ" ? `${styles.a} ${styles.aActive}` : styles.a}
                       onClick={() => setActive("NASDAQ")}>NASDAQ</span>
                    <img src={arrowGreenTopImg} alt="logo" width="7" height="11"/>
                </div>
                <div>
                    <span className={active === "DOW" ? `${styles.a} ${styles.aActive}` : styles.a}
                       onClick={() => setActive("DOW")}>DOW</span>
                    <img src={arrowGreenTopImg} alt="logo" width="7" height="11"/>
                </div>
                <div>
                    <span className={active === "APPLE" ? `${styles.a} ${styles.aActive}` : styles.a}
                       onClick={() => setActive("APPLE")}>APPLE INC.</span>
                    <img src={arrowRedBottomImg} alt="logo" width="7" height="11"/>
                </div>
                <div>
                    <span className={active === "AMEX" ? `${styles.a} ${styles.aActive}` : styles.a}
                       onClick={() => setActive("AMEX")}>AMEX</span>
                    <img src={arrowGreenTopImg} alt="logo" width="7" height="11"/>
                </div>
            </div>
            <div className={styles.graphData}>
                {active === "NASDAQ" ? <div className={styles.delta}/> :
                    active === "DOW" ? <div className={`${styles.delta} ${styles.delta2}`}/> :
                        active === "APPLE" ? <div className={`${styles.delta} ${styles.delta3}`}/> :
                            <div className={`${styles.delta} ${styles.delta4}`}/>}
                <div className={styles.graph}>
                    <ResponsiveContainer width="80%" height={160}>
                        <AreaChart data={graphData}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#60ffff" stopOpacity={0.8}/>
                                </linearGradient>
                            </defs>
                            {/*Насколько я понял принимает только инлайн стили */}
                            <XAxis dataKey="name" tick={tickStyle}/>
                            <YAxis tick={tickStyle}/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            {/*<Tooltip/>*/}
                            <Area type='linear' dataKey="uv" stroke="#60ffff"/>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className={styles.dataBlock}>
                    <div className={styles.headerData}>
                        <div className={styles.highDay}>2,968.76</div>
                        <div className={styles.date}>2.28.2021</div>
                    </div>
                    <Metadata/>
                    <Metadata/>
                    <Metadata/>
                    <Metadata/>
                    <Metadata/>
                </div>
            </div>
        </div>
    )
}

function Metadata() {
    return (
        <div className={styles.metadata}>
            <div className={styles.data}>
                <div>Open:</div>
                <div>2,968.76</div>
            </div>
            <div className={styles.line}/>
        </div>
    )
}
