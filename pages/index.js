import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boxsales | E-commerce</title>
        <meta name="description" content="Comprar online não precisa ser complicado" />
        <link rel="svg" href="/bear.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Boxsales E-commerce, <a href="#"><br></br>Simplicando suas<br></br> compras no online</a>
        </h1>

        <p className={styles.description}>
          Criando uma nova experiência em e-commerce {' '}
          <div className={styles.wadystatus}><code className={styles.code}>Status do e-commerce: Desenvolvimento</code></div>
          
        </p>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          rel="noopener noreferrer"
        >
          {' '}  <span className={styles.logo}>Powered by Boxsales comercio & serviços Ltda.</span>
        </a>
      </footer>
    </div>
  )
}
