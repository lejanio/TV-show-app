import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Item, tagReplaceRegex } from '../Main/Main';
import './ShowGrid.scss';
import placeholder from '../../img/logo.svg';

type CharacterGridType = {
    items: Item[];
}

const ShowGrid:FC<CharacterGridType> = ({ items }) => (

  <div className="cards">
    {items.map((item) => (
      <Link key={item.show.id} to={`/shows/${item.show.id}`}>
        <div
          className="card"
        >
          <span className="card__heading">
            {item.show.name}
          </span>
          <div className="card__image-container">
            {(item.show.image === null)
              ? (
                <img src={placeholder} alt="placeholder" className="card__image--alternative" />
              )
              : (
                <img src={item.show.image.original} alt="show" className="card__image" />
              )}
          </div>
          <FontAwesomeIcon icon={faInfoCircle} className="card__info-icon" />
          <p className="card__summary">
            {(!item.show.summary)
              ? (
                <span>(Summary not available)</span>
              )
              : (
                item.show.summary.replace(tagReplaceRegex, '').slice(0, 70).concat('...')
              )}
          </p>
        </div>
      </Link>
    ))}
  </div>
);

export default ShowGrid;
