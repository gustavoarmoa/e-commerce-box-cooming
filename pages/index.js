import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wady EduTech</title>
        <meta name="description" content="Wady EduTech - criando uma nova experiencia para instituições de ensino eautomatizando sua IES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Wady <a href="#">EduTech</a>
        </h1>

        <p className={styles.description}>
          Criando uma nova experiência em gestão de matrículas para o EAD{' '}
          <div className={styles.wadystatus}><code className={styles.code}>Status do site: Desenvolvimento</code></div>
          
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
