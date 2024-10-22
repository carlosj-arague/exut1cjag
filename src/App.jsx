import { useState } from 'react'

import Noticia from './components/Noticia'

import './App.css'

function App() {
  const noticias = [{
    id: 0,
    avatar: 'src/images/avatar01.png',
    altAvatar: 'Avatar predeterminado masculino',
    titulo: 'Inserte título de noticia',
    fecha: '1 de enero de 1990',
    rutaImagen: 'src/images/sky.jpg',
    altImagen: 'Imagen sobre las nubes captando el sol en el horizonte',
    noticia: 'Saqué esta foto en mi último vuelo como Superm... digo, en mi último viaje en avión con Lois.',
    numLikes: 1969
  }, {
    id: 1,
    avatar: 'src/images/avatar02.png',
    altAvatar: 'Avatar predeterminado femenino',
    titulo: 'Amor de verano en invierno',
    fecha: '14 de febrero de 2000',
    rutaImagen: 'src/images/sea.jpg',
    altImagen: 'Un mar en calma reflejando el sol bajo el cielo naranja del atardecer',
    noticia: 'El ámbar del atardecer',
    numLikes: 1492
  }, {
    id: 2,
    avatar: 'src/images/avatar03.png',
    altAvatar: 'Pingüino sonriendo',
    titulo: '¡Linux es lo más!',
    fecha: '13 de marzo de 2020',
    rutaImagen: 'src/images/tux.jpg',
    altImagen: 'Un fondo negro donde resalta en simbología el gusto por el sistema operativo Linux',
    noticia: 'Me encanta Linux. Nada más que añadir, su Señoría',
    numLikes: 0
  }, {
    id: 3,
    avatar: 'src/images/avatar04.png',
    altAvatar: 'Hombre con bigote y gorra roja',
    titulo: 'Mario, mi modelo a seguir',
    fecha: '22 de octubre de 2024',
    rutaImagen: 'src/images/mario.jpg',
    altImagen: 'Mario saltando sobre un fondo rojo',
    noticia: 'Mario es un fontanero italiano que parece mexicano diseñado por japoneses doblado por americanos. No seas racista. Sé como Mario.',
    numLikes: 155
  },]



  return (
    <>
      {noticias.map((n) => (
        <Noticia avatar={n.avatar}

          key={n.id}
          altAvatar={n.altAvatar}
          titulo={n.titulo}
          fecha={n.fecha}
          rutaImagen={n.rutaImagen}
          altImagen={n.altImagen}
          noticia={n.noticia}
          numLikes={n.numLikes}></Noticia>
          ))}
    </>
  )
}

export default App
