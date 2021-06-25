import React from 'react';

import {OfficeMap} from './office-map';

const ProductTabContacts = () => {
  return (
    <section className="product-tab-contacts">
      <h2 className="visually-hidden">Контакты</h2>

      <dl className="product-tab-contacts__list">
        <dt className="product-tab-contacts__list-item-key">
          Адрес
        </dt>
        <dd className="product-tab-contacts__list-item-value">
          Санкт-Петербург,<br/>
          набережная реки Карповки, дом 5
        </dd>

        <dt className="product-tab-contacts__list-item-key">
          Режим работы
        </dt>
        <dd className="product-tab-contacts__list-item-value">
          Ежедневно, с 10:00 до 21:00
        </dd>

        <dt className="product-tab-contacts__list-item-key">
          Телефон
        </dt>
        <dd className="product-tab-contacts__list-item-value">
          <a href="tel:+78003335599">8 (800) 333-55-99</a>
        </dd>

        <dt className="product-tab-contacts__list-item-key">
          E-mail
        </dt>
        <dd className="product-tab-contacts__list-item-value">
          <a href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
        </dd>
      </dl>

      <OfficeMap/>
    </section>
  );
};

export {ProductTabContacts};
