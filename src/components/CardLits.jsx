import React from 'react';

import '../sass/card-list.sass';

const CardLits = () => (
  <div className="card-list">
    {[...Array(32)].map((x, i) =>
      <div className="card-list__column" key={i}>
        <a href="##" className="card-list__item">
          <img src="https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano1.jpg" alt=""/>
        </a>
      </div>
    )}
  </div>
);

export default CardLits;