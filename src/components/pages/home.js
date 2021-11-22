import styles from './home.module.css';
import imagem from '../../components/pages/img/brasao.png'

function Home() {
    return (
      <section className={styles.home_container}>
           <img src={imagem} alt="brasao top" />
          <h1>SESACRE</h1>
          <p>Secretaria de Estado da Saúde</p>
      </section> 
    );
}
export default Home;