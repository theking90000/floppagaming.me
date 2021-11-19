import type {NextPage} from 'next'
import styles from '../styles/Index.module.scss'
import Image from "next/image"
import floppaGaming from "../assets/floppagaming.jpg"
import Background from "../components/Background";

const Home: NextPage = () => {
    return (
        <Background>
            <div className={styles.container}>
                <div className={styles.main}>
                    <h1>Floppa Gaming</h1>
                    <Image src={floppaGaming}/>
                    LOLZ
                </div>

            </div>
        </Background>
    )
}

export default Home
