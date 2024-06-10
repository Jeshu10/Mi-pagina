import './App.css';
import Testimonio from './componentes/testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>AFTER HOURS TIL DAWN TOUR</h1>
        <Testimonio
          nombre='The Weeknd'
          pais='Usa'
          imagen='Abel6.jpg'
          cargo='El rey'
          empresa='de la musica'
          testimonio='Abel Makkonen Tesfaye, conocido artísticamente como The Weeknd, es un cantante, rapero, compositor, productor discográfico y actor canadiense.​ Conocido por su versatilidad sónica y lirismo oscuro, su música explora el escapismo, el romance y la melancolía, y a menudo se inspira en experiencias personales.'
        />
        <Testimonio
        nombre='The Weeknd'
        pais='Beauty Behind the Madness'
        imagen='Abel10.jpg'
        cargo='Xo'
        empresa='The hills'
        testimonio='Beauty Behind the Madness es el segundo álbum de estudio del cantante canadiense The Weeknd. Republic Records y XO lo lanzaron alrededor del mundo el 28 de agosto de 2015 como descarga digital.' />
        <Testimonio
          nombre='The Weeknd'
          pais='Daft Punk'
          imagen='Abel3.jpg'
          cargo='El Brillo de un'
          empresa='Starboy'
          testimonio='Una colaboración entre The Weeknd y el dúo francés Daft Punk, es un himno de ostentación y éxito en la industria musical. La letra refleja una mezcla de arrogancia y celebración del estatus alcanzado por The Weeknd, cuyo nombre real es Abel Tesfaye. Con un ritmo pegajoso y una producción impecable, Starboy se convirtió en un éxito instantáneo tras su lanzamiento en 2016 destacando en las listas de popularidad a nivel mundial.'
        />
      </div>
    </div>
  );
}

export default App;



