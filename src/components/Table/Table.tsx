import React, { FC } from 'react';
import './Table.scss';
import { EpisodeType } from '../../pages/Show/Show';

type TableType = {
    episodes: EpisodeType[];
}

const Table:FC<TableType> = ({ episodes }) => (
  <table>
    <thead>
      <tr>
        <th>Season</th>
        <th>Episode</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      {episodes.map((episode) => (
        <tr key={episode.id}>
          <td>{episode.season}</td>
          <td>{episode.number}</td>
          <td>{episode.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
