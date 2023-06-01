import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BookingForm from "./BookingForm";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShowDetails();
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={show.image.medium} alt="" />
        <div className="card-body">
          <h1>{show.name}</h1>
          <p>{show.summary}</p>
        </div>
        <button className="btn btn-info" onClick={() => setIsBookingOpen(true)}>
          Book Movie Ticket
        </button>
        {isBookingOpen && <BookingForm show={show} />}

        <button>
          <Link to="/">
            <button className="btn btn-success">Back to Shows</button>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ShowDetails;
