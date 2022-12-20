import styles from "../../styles/Home.module.css"
import { useRouter } from "next/router"

export default function Coin() {
    const route = useRouter()
    const data = route.query

    return (
        <main className={styles.main}>
            <h1>{data.name}</h1>
            <img src={data.icon} alt={data.name} />
            <ul>
                <li>Price: {parseFloat(data.price).toFixed(2)}</li>
                <li>Market Cap: {parseFloat(data.marketCap).toFixed(2)}</li>
                <li>Total supply: {parseFloat(data.totalSupply)}</li>
                <li>Volume: {parseFloat(data.volume).toFixed(2)}</li>
            </ul>

        </main>
    )
}