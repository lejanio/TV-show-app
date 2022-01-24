import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { tagReplaceRegex } from '../../components/Main/Main';
import './Show.scss';
import placeholder from '../../img/logo.svg';
import Table from '../../components/Table/Table';

type ShowType = {
    id: number;
    name: string;
    genres: string[];
    status: string;
    image: {
        medium: string;
        original: string;
    };
    summary: string;
}

export type EpisodeType = {
    id: number;
    season: number;
    number: number;
    name: string;
}

const initialShow = {
  id: 0,
  name: '',
  genres: [''],
  status: '',
  image: {
    medium: '',
    original: '',
  },
  summary: '',
};

const Show = () => {
  const [show, setShow] = useState<ShowType>(initialShow);
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const { id } = useParams<'id'>();

  useEffect(() => {
    const fetchShow = async () => {
      const result = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      const episodesResult = await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);

      setShow(result.data);
      setEpisodes(episodesResult.data);
    };

    fetchShow();
  }, []);

  return (
    <div className="show--container">
      <nav>
        <Link to="/" className="link">&lt; Back to search</Link>
      </nav>
      <h1 className="show__heading">
        {show.name}
      </h1>
      <div className="show__image-container">
        {(show.image === null)
          ? (<img src={placeholder} alt="placeholder" className="show__image" />)
          : (<img src={show.image.original} alt="show" className="show__image" />)}
      </div>
      <div className="show__information">
        <div className="show__summary-section">
          <h2>
            Summary:
          </h2>
          <p>
            {(!show.summary)
              ? (
                <span>(Summary not available)</span>
              )
              : (
                show.summary.replace(tagReplaceRegex, '')
              )}
          </p>
        </div>
        <div className="show__episodes-section">
          <h2>
            Seasons and episodes:
          </h2>
          <Table
            episodes={episodes}
          />
        </div>
      </div>

    </div>
  );
};

export default Show;
