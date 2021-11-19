import {FC} from "react";
import styles from "../styles/Background.module.scss"


const Background: FC = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.child1}>
                LOLZ
            </div>
            <div className={styles.child2}>
                {children}
            </div>
        </div>
    )
}

export default Background


