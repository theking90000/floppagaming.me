import type {NextPage} from 'next'
import styles from '../styles/Index.module.scss'
import Image from "next/image"
import floppaGaming from "../public/assets/floppagaming.jpg"
import Background from "../components/Background/Background";

const Home: NextPage = () => {
    return (
        <Background>
            <div className={styles.container}>
                <div className={styles.main}>
                    <h1>Floppa Gaming</h1>
                    <div className={styles.floppa}>
                        <Image  src={floppaGaming}/>
                    </div>
                </div>
            </div>
        </Background>
    )
}

export default Home
