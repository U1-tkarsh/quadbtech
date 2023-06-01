import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div>
      <h1>TV Shows</h1>
      <div className="card" style={{width: '18rem'}}>
      {shows.map((show) => (
        <div key={show.show.id}>
          <img src={show.show.image.medium} alt="" />
          <div className="card-body">
          <h2 className="card-title">{show.show.name}</h2>
          <p className="card-text">{show.show.summary}</p>
          <Link to={`/show/${show.show.id}`}>
            <button className= "btn btn-primary">View Details</button>
          </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ShowList;
