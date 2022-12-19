import styles from "../styles/Navbar.module.css"
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link href="/">Home</Link>
            <Link href="/coins">Coins</Link>
            <Link href="/about">About</Link>
        </div>
    )
}