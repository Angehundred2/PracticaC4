const app = new Vue({
    el: '#app',
    data: {
        entrenadores: [],
        entrenadoresSeleccionados: [],
        detallesEntrenadorSeleccionado: null, 
        mostrarMensajeBatalla: false,
        entrenador1: {},
        entrenador2: {}
    },

    mounted() {
        fetch('json/Entrenadores.json')
            .then(response => response.json())
            .then(data => {
                this.entrenadores = data.trainers;
            })
            .catch(error => console.error('Error al obtener entrenadores:', error));
    },

    methods: {
        mostrarPokemon(idEntrenador) {
            if (this.detallesEntrenadorSeleccionado === idEntrenador) {
                this.detallesEntrenadorSeleccionado = null; 
            } else {
                this.detallesEntrenadorSeleccionado = idEntrenador; 
            }
        },

        alternarSeleccion(idEntrenador) {
            const index = this.entrenadoresSeleccionados.indexOf(idEntrenador);
            if (index === -1) {
                if (this.entrenadoresSeleccionados.length < 2) {
                    this.entrenadoresSeleccionados.push(idEntrenador);
                }
            } else {
                this.entrenadoresSeleccionados.splice(index, 1);
            }
        },
        
        entrenadorSeleccionado(idEntrenador) {
            return this.entrenadoresSeleccionados.includes(idEntrenador);
        },

        iniciarBatalla() {
            if (this.puedeIniciarBatalla) {
                this.entrenador1 = this.entrenadores.find(entrenador => entrenador.id === this.entrenadoresSeleccionados[0]);
                this.entrenador2 = this.entrenadores.find(entrenador => entrenador.id === this.entrenadoresSeleccionados[1]);
                this.mostrarMensajeBatalla = true;
            }
        }
    },

    computed: {
        puedeIniciarBatalla() {
            return this.entrenadoresSeleccionados.length === 2;
        }
    }
});
