// Componente para mostrar la lista de entrenadores y sus Pokémon
Vue.component('entrenadores', {
    props: {
        entrenadores: Array,
        detallesEntrenadorSeleccionado: Number,
        entrenadoresSeleccionados: Array
    },
    methods: {
        mostrarPokemon(idEntrenador) {
            this.$emit('mostrar-pokemon', idEntrenador);
        },
        alternarSeleccion(idEntrenador) {
            this.$emit('alternar-seleccion', idEntrenador);
        },
        entrenadorSeleccionado(idEntrenador) {
            return this.entrenadoresSeleccionados.includes(idEntrenador);
        }
    },
    template: `
        <div class="trainers">
            <div v-for="entrenador in entrenadores" :key="entrenador.id" class="trainer-card">
                
                <h2>{{ entrenador.id }} - {{ entrenador.name }}</h2>
                <img :src="entrenador.image" :alt="'Imagen de ' + entrenador.name" class="trainer-image">
                
                <div class="buttons-container">
                    <button @click="mostrarPokemon(entrenador.id)">Ver Pokémon</button>

                    <div v-if="detallesEntrenadorSeleccionado === entrenador.id" class="pokemon-list">
                        <ul>
                            <li v-for="pokemon in entrenador.pokemon" :key="pokemon.id">{{ pokemon.name }}</li>
                        </ul>
                    </div>
                    <button @click="alternarSeleccion(entrenador.id)" v-if="!entrenadorSeleccionado(entrenador.id)">Seleccionar para combate</button>
                    <button @click="alternarSeleccion(entrenador.id)" :class="{ 'select-button-selected': entrenadorSeleccionado(entrenador.id) }" v-if="entrenadorSeleccionado(entrenador.id)">Cancelar selección</button>
                  
                </div>
            </div>
        </div>
    `
});
