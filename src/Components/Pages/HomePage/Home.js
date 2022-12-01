import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../../Wrapper'
import styles from './home.module.css'


const Home = () => {
  return (
    <Wrapper >
        <main className={styles.main}>
          <div className={styles.centralize}>
          <section>
          <div className={styles.text}>
            <header>So, you want to travel to</header>
            <h1>SPACE</h1>
            <p>Lets face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give tou a truly out of this world experience!</p>
          </div>
          <div className={styles.explore}>
            <Link to='/destination'>
              Explore
            </Link>
          </div>
        </section>
          </div>
         
      </main>
    </Wrapper>
  )
}

export default Home