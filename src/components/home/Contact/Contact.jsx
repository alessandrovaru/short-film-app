import styles from './Contact.module.css';
const data = 
  [{
    phoneNumber: "+58 424-2642178",
    email: "catarsis.theshortfilm@gmail.com", 
  }];
export const Contact = ( ) => {
  return (
    <section className={`${styles.section}`}>
      {data.map((item, index) => (
        <div key={index} className={`${styles.contactContainer} container`}>
          <div className={styles.text}>
            <p className={styles.phoneNumber}>{item.phoneNumber}</p>
            <h3 className={styles.email}>{item.email}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}