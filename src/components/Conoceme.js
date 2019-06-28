import React from 'react';

class Conoceme extends React.Component {
  render() {
    const {imagen, handleChange} = this.props;

    return (
      <section className="conoceme" id="conoceme">

        <div className="conoceme__info">
          <h1 className="conoceme__name">Patricia García</h1>
          <h2 className="conoceme__job">Desarrolladora front-end</h2>
        </div>

          <img src={imagen} alt="" className="conoceme__img" id="conoceme__img" />


        <p className="conoceme__text">
        Tras varios años en una start-up de desarrollo software ocupándome de todo tipo de funciones que nada tenían que ver con el código, me descubrí mirando con curiosidad y envidia (de la sana) ese extraño campo.

        <br /><br />

        Decidí cruzar la línea y toparme con la programación 🚀. He descubierto mi aptitud en este campo y he pivotado mi carrera profesional para reconvertirme en desarrolladora Front-end con la ayuda de Adalab.

        <br /><br />

        Mi formación como Ingeniera complementa este perfil al que hay sumarle mis ganas inagotables de seguir avanzando y de enfrentarme a nuevos retos 🤖.

        <br /><br />

        Comprometida, analítica y proactiva, acostumbrada a trabajar en equipos multifuncionales.

        <br /><br />

        Vale, vale, todo está genial, pero cuando llega un día chungo... de los de verdad... si no quieres saber que pasa, no pulses el botón rojo bajo ningún concepto.
        </p>

        <a href="#conoceme__img" className="conoceme__link">
          <div className="conoceme__red-button" onClick={handleChange}>
            NO PULSAR <i className="fas fa-skull"></i>
          </div>
        </a>
      </section>
    );
  }
}

export default Conoceme;