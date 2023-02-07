import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from "./components/Header"
import Hero from "./components/Hero"
import Explore from "./components/Explore"
import Join from "./components/Join"
import Popular from "./components/Popular"
import Cta from "./components/Cta"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deku - Inicio</title>
      </Head>
      
      <Header />
      <Hero />
      <Explore />
      <Join />
      <Popular />
      <Cta />
      <Footer />
    </div>
  );
}
