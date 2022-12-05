import MensajeEmpleados from "../../src/components/MensajeEmpleados";
import styles from '../../styles/Home.module.css'

function mensajes () {
  return(
    <main className={styles.main}>
      <MensajeEmpleados />
    </main>
  );
}

export default mensajes;