import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loquimar</title>
        <meta name="description" content="Wady EduTech - criando uma nova experiencia em gestão de matrículas para sua instituição de ensino" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Loquimar, <a href="#">aluguel de maquinas</a>
        </h1>

        <p className={styles.description}>
          Criando uma nova experiência em alugueis de máquinas{' '}
          <div className={styles.wadystatus}><code className={styles.code}>Status do site: Desenvolvimento</code></div>
          
        </p>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          rel="noopener noreferrer"
        >
          {' '}  <span className={styles.logo}>Powered by Loquimar Ltda.</span>
        </a>
      </footer>
    </div>
  )
}
