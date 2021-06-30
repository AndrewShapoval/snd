import React, {useEffect, useRef, useState} from "react"
import styles from "../Select/Select.module.css"

export const Select = ({items}) => {

    const [active, setActive] = useState(false)
    const sortRef = useRef()
    const [selectId, setSelectId] = useState(1)
    const selectedItem = items.find((i) => i.id === selectId)
    console.log(selectedItem)

    const handleActive = () => {
        setActive(!active)
    }
    const handleSelectId = (id) => {
        setSelectId(id)
    }
    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setActive(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
        return () => {
            document.body.removeEventListener('click', handleOutsideClick)
        }
    }, [])

    return (
        <div className={styles.select} onClick={handleActive} ref={sortRef}>
            <div className={styles.selected}>{selectedItem.tittle}</div>
            <div className={styles.selectArrow}/>
            {active
                ? <div className={styles.selectContainer}>
                    {items.map((item) => <div className={styles.selectItem} key={item.tittle}
                                              onClick={() => handleSelectId(item.id)}>{item.tittle}</div>)}
                </div>
                : <></>
            }
        </div>
    )
}
