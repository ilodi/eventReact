import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriasProvider from './context/CategoriasContext';
import EventosProvider from './context/EventosContext';

function App() {
  return (

    <>
      <Header />
      <div className="uk-container">
        <EventosProvider>
          <CategoriasProvider>
            <Formulario />
          </CategoriasProvider>
        </EventosProvider>
      </div>
    </>

  );
}

export default App;
