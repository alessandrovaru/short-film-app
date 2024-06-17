import styles from './MainContent.module.css';

const data = {
  vision: 'Nuestra mitología está llena de historias fantásticas y mitológicas poco exploradas en la ficción venezolana, mucho menos en el cine.  Entre estas historias resalta la figura de entes femeninos y su relación con la naturaleza. La Sayona, La Llorona y, la figura que inspira esta historia, María Lionza, son imágenes que queremos explorar desde un punto femenino, no solo como un cuento de advertencia que cuentan las abuelas, sino como metáforas de nosotras mismas. De la mano con esto, queremos rescatar el misticismo de nuestras montañas, llenas de magnetismo desde la costa hasta los andes. “Catarsis” es una historia que nos llama a integrar el duelo y nuestros miedos más profundos. Una historia que nos invita a mirar de frente a esos monstruos ocultos en nuestro interior, incluso si eso implica vernos a nosotros mismos como uno.',
  synopsis: 'Elena, tras lidiar con la muerte de su madre y su reciente despido, acepta la invitación de Valeria, su amiga de la infancia, para ir de acampada. En lo que era una salida para despejarse, Elena no puede evitar sentir que algo o alguien la llama a través de los árboles. Entre la hipocresía de sus amigos y la inquietante presencia en el bosque, Elena no sabe qué es peor quedarse en la seguridad del campamento con la gente que odia o adentrarseen el bosque que le abre los brazos con una terrorífica invitación.'
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