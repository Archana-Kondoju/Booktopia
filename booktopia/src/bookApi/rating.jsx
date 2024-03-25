import React from 'react';

const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="star filled">★</span>);
    } else {
      stars.push(<span key={i} className="star empty">★</span>);
    }
  }

  return (
    <div className="rating">
      {stars}
    </div>
  );
};

export default Rating;
