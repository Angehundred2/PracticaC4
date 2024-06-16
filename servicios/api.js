class Servicios {
  fetchData(callback) {
      const apiurl = 'json/Entrenadores.json'; // Asegúrate de que la ruta sea correcta
      fetch(apiurl)
          .then(response => response.json())
          .then(data => {
              callback(null, data);
          })
          .catch(error => {
              console.error('Error fetching trainers data:', error);
              callback(error, null);
          });
  }
}

// Exportar la clase para poder importarla en otro archivo
export default Servicios;
