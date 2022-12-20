import styles from "../../styles/Home.module.css"
import Axios from "axios"
import Link from "next/link"

export const getStaticProps = async () => {
    const res = await Axios.get(
        "https://api.coinstats.app/public/v1/coins?skip=0"
      )
  
    return {
      props: {
        coins: res.data
      },
    }
}

export default function CoinList({coins}) {
    return (
        <main className={styles.main}>
            <h1>Coinlist</h1>
            {coins.coins.map((coin) => (
                <div key={coin.id} className={styles.coin}>
                    <img src={coin.icon} alt={coin.name} className={styles.coinImg}/>
                    <Link
                      href={{
                          pathname: `/coins/${coin.symbol}`,
                          query: coin // the coin data
                        }}
                      className={styles.link}>
                        <p>{coin.id} {coin.price.toFixed(2)}</p>
                    </Link>
                </div>
                )
            )}
        </main>
    )
}