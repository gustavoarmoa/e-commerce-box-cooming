import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wady Educacional</title>
        <meta name="description" content="Wady Educacional - criando uma nova experiencia para instituições de ensino eautomatizando sua IES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Wady <a href="#">Educacional</a>
        </h1>

        <p className={styles.description}>
          Estamos criando uma nova experiencia para instituições de ensino{' '}
          <code className={styles.code}>status: Desenvolvimento</code>
        </p>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}  <span className={styles.logo}>Powered by Boxsales comercio e serviços Ltda.</span>
        </a>
      </footer>
    </div>
  )
}
