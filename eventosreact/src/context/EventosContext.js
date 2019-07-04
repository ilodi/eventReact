import React, { Component } from 'react'
import axios from 'axios';
//context es el provedor de datos
const EventosContext = React.createContext();
//consumer
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {
  token = 'KPEUQDTDUOI4YVKOQLCQ';
  ordenar = 'date';

  state={
    //son un arreglo 
    eventos : []
  }

  //metodo para obtener eventos
  //lo que el usuairo busque va a ser un objeto
  obtenerEventos = async (busqueda) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;
    
    // consiltar API con la URL
    const eventos = await axios(url);

    console.log(eventos);
  }

  render(){
    return(
      <>
        <EventosContext.Provider
        value={{
          eventos: this.state.eventos,
          obtenerEventos: this.obtenerEventos
        }}>
          {this.props.children}
        </EventosContext.Provider>
      </>
    );
  }
}

export default EventosProvider;