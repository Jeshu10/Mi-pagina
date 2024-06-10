import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import '../hoja-de-estilos/Testimonio.css';

function Testimonio({ nombre, pais, imagen, cargo, empresa, testimonio }) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/${imagen}`)}
        alt={`${nombre}`}
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          "{`${nombre} en ${pais}`}"
          </p>
        <p className='cargo-testimonio'>{`${cargo} ${empresa}`}</p>
        <p className='texto-testimonio'>{testimonio}</p>
      </div>
    </div>
  );
}

Testimonio.propTypes = {
  nombre: PropTypes.string.isRequired,
  pais: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  empresa: PropTypes.string.isRequired,
  testimonio: PropTypes.string.isRequired,
};

export default Testimonio;


