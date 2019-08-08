import axios from 'axios'

export default {
  state: {
    list: [],
    selectedPokemon: null,
    isFetching: null,
    error: null
  },
  reducers: {
    setIsFetching: (state, payload) => {
      return { ...state, isFetching: payload}
    },
    setPokemons: (state, payload) => {
      return { ...state, list: payload }
    },
    setError: (state, payload) => {
      return { ...state, error: payload}
    }
  },
  effects: (dispatch) => {
    return {

      fetchPokemons: async (payload, rootState) => {
        try {
          dispatch.pokemons.setIsFetching(true)
          await new Promise(resolve => setTimeout(resolve, 1000))
          let url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
          let response = await axios.get(url)
          dispatch.pokemons.setIsFetching(false)
          dispatch.pokemons.setPokemons(response.data.results)
          dispatch.pokemons.setError(null)
        } catch (err) {
          dispatch.pokemons.setError(err.message)
        }
      }

    }
  }
}
