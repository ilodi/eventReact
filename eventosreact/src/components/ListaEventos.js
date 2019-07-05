import React from "react";
import Evento from "./Evento";
import { EventosConsumer } from "../context/EventosContext";

const ListaEventos = () => {
  return (
    <div className="uk-child-width-1-3@m" uk-grid="true">
      <EventosConsumer>
        {(value) => {
         return value.eventos.map(evento => (
           <Evento />
         ))
        }}
      </EventosConsumer>
    </div>
  );
};

export default ListaEventos;
