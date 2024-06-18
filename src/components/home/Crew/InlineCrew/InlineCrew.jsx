import Image from "next/image";
import styles from "./InlineCrew.module.css";

const data = [
  {
    image: '/images/crew/vero.jpg',
    title: 'Verónica Guillén',
    inCharge: 'Directora - Guionista',
    text: 'Licenciada en Comunicación Social por la Universidad Católica Andrés Bello (UCAB), con especialización en Producción Audiovisual y Guionismo. He trabajado en múltiples áreas de la comunicación, enfocándome en la creación de contenidos audiovisuales como escritora de contenidos para redes sociales, productora, guionista, asistente de dirección y, recientemente, directora en Caracas y a distancia para clientes en Estados Unidos, Canadá, Irlanda y México.',
    portfolio:{
      shortFilms: [
        { 
          title: 'La Biblioteca',
          year: '2023',
          inCharge: 'Directora, Escritora y Productora'
        },
        { 
          title: 'Gracias por venir',
          year: '2023',
          inCharge: 'Productora'
        }
      ],
      musicVideos: [
        { 
          title: 'Caramelos de Cianuro - Átame',
          year: '2023',
          inCharge: 'Asistente de Dirección',
          url: 'https://www.youtube.com/watch?v=5mFeigDdwMc'
        },
        { 
          title: 'Los Deloreans - Amor Inglés',
          year: '2023',
          inCharge: 'Asistente de Dirección',
          url: 'https://www.youtube.com/watch?v=O9GfIr6GpPE'
        }
      ],
      commercials: [
        { 
          title: 'Los Pro del Ahorro - Banco Nacional de Crédito',
          year: '2023',
          inCharge: 'Asistente de Dirección, Set PA',
          url: 'https://www.youtube.com/watch?v=luTjQ5DQSSY'
        },
        { 
          title: 'Logros - Telefónica Movistar',
          year: '2022',
          inCharge: 'Asistente de Dirección, Set PA'
        },
        { 
          title: 'Estampas de Navidad - Comercial para televisión Nacional',
          year: '2021',
          inCharge: 'Asistente de Dirección, Set PA'
        }
      ],
      movies: [
      ],
      podcast: [
      ],
      digitalContent: [
      ],
    },
    imageAlign: 'left'
  },
  {
    image: '/images/crew/adriana.jpg',
    title: 'Adriana Zerpa',
    inCharge: 'Productora',
    text: 'Joven productora con cinco años de experiencia en diferentes formatos, desde contenido audiovisual para redes sociales hasta largometraje de ficción. Egresada de la Universidad Audiovisual de Venezuela con honores en la carrera de Producción Audiovisual. Co-fundadora Triang Estudio, casa productora audiovisual y de contenidos, donde cumple el rol de productora y fotógrafa para diversos clientes, a la par de su desempeño como productora freelance.',
    portfolio:{
      movies: [
        { 
          title: 'Proyecto 23',
          year: '2023',
          inCharge: 'Coordinadora de producción'
        }
      ],
      podcast: [
        { 
          title: 'Cuéntame un poc',
          year: '2022-2023',
          inCharge: 'Productora'
        }
      ],
      musicVideos: [
        { 
          title: 'Pajarillo Verde Cayiao',
          year: '2022',
          inCharge: 'Asistente de producción'
        },
        { 
          title: 'No me atreví',
          year: '2020',
          inCharge: 'Productora General'
        }
      ],
      digitalContent: [
        { 
          title: 'Actualidad - Triang Estudio Creativo',
          year: '2019',
          inCharge: 'Productora'
        }
      ],
      commercials: [
        
      ],
      shortFilms: [
        
      ],
    },
    imageAlign: 'right'
  },
];

export const InlineCrew = () => {
  return (
    <div className={`${styles.container} container`}>
      {data.map((item, index) => (
        <div key={index} className={item.imageAlign === 'left' ? styles.inlineFlex : styles.inlineFlex2}>
          <div className={item.imageAlign === 'left' ? styles.imageContainer : styles.imageContainer2 }>
            <Image src={item.image} alt="crew" fill loading="lazy" /> 
          </div>
          <div className={styles.contentContainer}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
            <p className={styles.inCharge}>{item.inCharge}</p>
            <h4 className={styles.portfolioTitle}>Portafolio</h4>
            <div className={styles.portfolioContainer}>
              <div className={styles.portfolioItem}>
                {item.portfolio.shortFilms.length > 0 && 
                  <>
                    <h5 className={styles.portfolioItemTitle}>Cortometrajes</h5>
                    {item.portfolio.shortFilms.map((shortFilm, index) => (
                      shortFilm.url ?
                        <a key={index} className={styles.portfolioItemText} href={shortFilm.url} target="_blank" rel="noreferrer">{shortFilm.title} - {shortFilm.year} - {shortFilm.inCharge}</a>
                        :
                        <p key={index} className={styles.portfolioItemText}>{shortFilm.title} - {shortFilm.year} - {shortFilm.inCharge} {shortFilm.url}</p>
                    ))}
                  </>
                }
              </div>
              <div className={styles.portfolioItem}>
                {item.portfolio.musicVideos.length > 0 && 
                  <>
                    <h5 className={styles.portfolioItemTitle}>Videos Musicales</h5>                  
                    {item.portfolio.musicVideos.map((musicVideo, index) => (
                      musicVideo.url ?
                        <a key={index} className={styles.portfolioItemText} href={musicVideo.url} target="_blank" rel="noreferrer"><p>{musicVideo.title} - {musicVideo.year} - {musicVideo.inCharge}</p></a>
                        :
                        <p key={index} className={styles.portfolioItemText}>{musicVideo.title} - {musicVideo.year} - {musicVideo.inCharge} {musicVideo.url}</p>
                    ))}
                  </>
                }
              </div>
              <div className={styles.portfolioItem}>
                {item.portfolio.commercials.length > 0 && 
                  <>
                    <h5 className={styles.portfolioItemTitle}>Comerciales</h5>
                    {item.portfolio.commercials.map((commercial, index) => (
                      <p key={index} className={styles.portfolioItemText}>{commercial.title} - {commercial.year} - {commercial.inCharge}</p>
                    ))}
                  </>
                }
              </div>
              <div className={styles.portfolioItem}>
                {item.portfolio.movies.length > 0 && 
                  <>
                    <h5 className={styles.portfolioItemTitle}>Largometrajes</h5>
                    {item.portfolio.movies.map((movie, index) => (
                      <p key={index} className={styles.portfolioItemText}>{movie.title} - {movie.year} - {movie.inCharge}</p>
                    ))}
                  </>
                }
              </div>
              <div className={styles.portfolioItem}>
                {item.portfolio.podcast.length > 0 && 
                  <>
                    <h5 className={styles.portfolioItemTitle}>Podcast</h5>
                    {item.portfolio.podcast.map((podcast, index) => (
                      <p key={index} className={styles.portfolioItemText}>{podcast.title} - {podcast.year} - {podcast.inCharge}</p>
                    ))}
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}