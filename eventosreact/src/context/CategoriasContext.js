import React, { Component } from 'react'
import axios from 'axios';

//Crear context Provider
const CategoriasContext = React.createContext();

//Crear consumer
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

  token = 'KPEUQDTDUOI4YVKOQLCQ';

  state = {
    categorias: []
  }

  componentDidMount() {
    this.obtenerCategorias();
  }
  //Crear metodo para componen
  obtenerCategorias = async () => {
    //Axios consumir API
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

    let categorias = await axios.get(url);
  
    //colocar respuesta en el state 
    this.setState({
      categorias : categorias.data.categories
    })
  }

  render() {
    return (
      <CategoriasContext.Provider
        value={{
          categorias: this.state.categorias
        }}
      >
        {/* //Para que funcione debes de agregar */}
        {this.props.children}
      </CategoriasContext.Provider>
    );
  }
}

export default CategoriasProvider; 