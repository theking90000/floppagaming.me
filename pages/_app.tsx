import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {atomWithStorage} from "jotai/utils";
import {useAtom} from "jotai";

export const darkModeAtom = atomWithStorage<boolean>("darkMode", false)

function MyApp({Component, pageProps}: AppProps) {

    const [darkMode] = useAtom(darkModeAtom)

    return (
        <div className={darkMode ? "dark" : ""}>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
