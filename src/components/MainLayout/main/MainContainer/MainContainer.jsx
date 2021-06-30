import styles from './MainContainer.module.css';
import {MediaAutors} from './MediaAutors/MediaAutors';
import {PopularArticles} from './PopularArticles/PopularArticles';
import {Content} from './Content/Content';
import newspaperImg from "../../../../img/newspaper.svg"
import userImg from "../../../../img/user.svg"

const text = 'Our syndicated contents often comes at a fraction of the cost of similar content purchased from other sources';

export function MainContainer() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.mediaAutorsBlock}>
                    <MediaAutors
                        logoSrc={newspaperImg}
                        title="MEDIA: Reduce Your Costs!"
                        text={text}
                    />
                    <MediaAutors
                        logoSrc={userImg}
                        title="AUTORS: Syndicate Your Content!"
                        text={text}
                    />
                </div>
                <PopularArticles />
                <Content />
            </div>
        </div>
    );
}
