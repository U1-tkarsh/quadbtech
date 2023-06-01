import React, { useState } from 'react';

const BookingForm = ({ show }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform booking submission or storage logic here
    console.log('Booking submitted:', {
      name,
      email,
      showName: show.name,
      showId: show.id,
    });
    // Reset form fields
    setName('');
    setEmail('');
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
    <form onSubmit={handleSubmit}>
      <h2>Book Movie Ticket</h2>
      <div>
        <label for="exampleInputEmail1" className="form-label">Name:</label>
        <input  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" type="text"  value={name} onChange={handleNameChange} required />
      </div>
      <div>
        <label for="exampleInputEmail1" className="form-label">Email:</label>
        <input type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        <label for="exampleInputEmail1" className="form-label">Movie:</label>
        <h5>{show.name}</h5>
      </div>
      <button type="submit" className="btn btn-danger">Submit</button>
    </form>
    </div>
  );
};

export default BookingForm;
