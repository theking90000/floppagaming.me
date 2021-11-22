import {FC, Suspense} from "react";
import styles from "../../styles/Background.module.scss"
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Scene"), {
    ssr: false,
})

const Background: FC = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.child1}>
                    <Scene/>
            </div>
            <div className={styles.child2}>
                {children}
            </div>
        </div>
    )
}

export default Background


