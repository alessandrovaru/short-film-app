import styles from './MainContent.module.css';

const data = {
  vision: 'Nuestra mitología está llena de historias fantásticas y mitológicas poco exploradas en la ficción venezolana, mucho menos en el cine. Entre estas historias resalta la figura de entes femeninos y su relación con la naturaleza. La Sayona, La Llorona y, la figura que inspira esta historia, María Lionza, son imágenes que queremos explorar desde un punto femenino, no solo como un cuento de advertencia que cuentan las abuelas, sino como metáforas de nosotras mismas. De la mano con esto, queremos rescatar el misticismo de nuestras montañas, llenas de magnetismo desde la costa hasta los andes.',
  synopsis: '“Catarsis” es una historia que nos llama a integrar el duelo y nuestros miedos más profundos. Una historia que nos invita a mirar de frente a esos monstruos ocultos en nuestro interior, incluso si eso implica vernos a nosotros mismos como uno.'
}
export const MainContent = (props) => {
  return (
    <div className={styles.container}>
      <h2>Synopsis</h2>
      <p>
        {data.synopsis}
      </p>
      <hr/>
      <h2>Visión de dirección</h2>
      <p>
        {data.vision}
      </p>
      <hr/>
    </div>
  );
}