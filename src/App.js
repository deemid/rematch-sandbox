import React from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

function App(props) {
  return (
    <div className="App">
      <pre>
        { JSON.stringify(props, null, 2) }
      </pre>
      <button onClick={() => { props.increment(1) }}>Add</button>
      <button onClick={() => { props.incrementAsync(1) }}>Async Add</button>
      <button onClick={() => { props.decrement(1) }}>Subtract</button>
      <button onClick={() => { props.fetchPokemons() }}>Fetch Pokemons</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count,
    pokemons: state.pokemons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: dispatch.count.increment,
    decrement: dispatch.count.decrement,
    incrementAsync: dispatch.count.incrementAsync,
    fetchPokemons: dispatch.pokemons.fetchPokemons 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
