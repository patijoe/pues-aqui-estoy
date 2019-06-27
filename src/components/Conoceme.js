import React from 'react';
import patri from '../images/patri.jpg';
import diachungo from '../images/diachungo.jpeg';

class Conoceme extends React.Component {
  render() {

    return (
      <section className="conoceme" id="conoceme">
        <div className="conoceme__info">
          <h1 className="conoceme__name">Patricia García</h1>
          <h2 className="conoceme__job">Desarrolladora front-end</h2>
        </div>
        <div className="conoceme__img" style={{backgroundImage: `url(${patri})`}}></div>
        <p className="conoceme__text">
        Tras varios años en una start-up de desarrollo software ocupándome de todo tipo de funciones que nada tenían que ver con el código, me descubrí mirando con curiosidad y envidia (de la sana) ese extraño campo.

        <br /><br />

        Decidí cruzar la línea y toparme con la programación 🚀. He descubierto mi aptitud en este campo y he pivotado mi carrera profesional para reconvertirme en desarrolladora Front-end con la ayuda de Adalab.

        <br /><br />

        Mi formación como Ingeniera complementa este perfil al que hay sumarle mis ganas inagotables de seguir avanzando y de enfrentarme a nuevos retos 🤖.

        <br /><br />

        Comprometida, analítica y proactiva, acostumbrada a trabajar en equipos multifuncionales.

        <br /><br />

        Vale, vale, todo está genial, pero cuando llega un día chungo... de los de verdad... 
        <a href={diachungo} className="dia__chungo">¿quieres saber que pasa?</a>
        </p>
      </section>
    );
  }
}

export default Conoceme;