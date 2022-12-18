import styles from "../../styles/Home.module.css"
import { useRouter } from "next/router"

export default function Detail() {
    const route = useRouter()
    const {id} = route.query
    let text = `Detail ${id}`
    return (
        <main className={styles.main}>
            <h1>{text}</h1>
        </main>
    )
}