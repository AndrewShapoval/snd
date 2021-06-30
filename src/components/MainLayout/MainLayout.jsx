import styles from './MainLayout.module.css';
import {LeftColumn} from './LeftColumn/LeftColumn';
import {Header} from "./Header/Header";

export function MainLayout({children}) {

    return (
        <div className={styles.wrapper}>
            <LeftColumn/>
            <div className={styles.container}>
                <Header/>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </div>
    );
}
