import styles from "../styles/Home.module.css"
import Link from "next/link"

const PageNotFound = () => {
    return (
        <main className={styles.main}>
            <h1>404 Page Not Found</h1>
            <Link href="/">Click here to go to Home</Link>
        </main>
    )
}

export default PageNotFound