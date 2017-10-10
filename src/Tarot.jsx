import React, { Component } from 'react';

import './sass/tarot.sass';

class Tarot extends Component {
  render() {
    return (
      <div className="tarot">
        <header className="header">
          <h1 className="header__title">Tarot Game</h1>
        </header>
        <button className="start-button">Iniciar</button>
        <main>
          <div className="card-list">
            {[...Array(32)].map((x, i) =>
              <div className="card-list__column">
                <a href="##" className="card-list__item">
                  <img src="https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano1.jpg" alt=""/>
                </a>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default Tarot;
