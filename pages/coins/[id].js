import styles from "../../styles/Home.module.css"
import { useRouter } from "next/router"


export default function Coin() {
    const route = useRouter()
    const data = route.query
    let text = `Coin ${data.id}`
    console.log(data)

    return (
        <main className={styles.main}>
            <h1>{data.name}</h1>
        </main>
    )
}