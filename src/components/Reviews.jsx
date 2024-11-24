import "./Reviews.css"
const Reviews = () => {
  const reviews = [
    {
      name: "Prince Choudhary",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, adipisci dolorem. Placeat voluptate animi quidem! Voluptates numquam architecto, debitis perspiciatis, eveniet quo doloremque voluptate quos dolore ipsam suscipit consectetur deserunt!",
      stars: 5,
    },
    {
      name: "Ajay Baghel",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, adipisci dolorem. Placeat voluptate animi quidem! Voluptates numquam architecto, debitis perspiciatis, eveniet quo doloremque voluptate quos dolore ipsam suscipit consectetur deserunt!",
      stars: 5,
    },
    {
      name: "Divya Raj",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, adipisci dolorem. Placeat voluptate animi quidem! Voluptates numquam architecto, debitis perspiciatis, eveniet quo doloremque voluptate quos dolore ipsam suscipit consectetur deserunt!",
      stars: 5,
    },
  ];

  return (
    <div className="reviews-container">
      <h2 className="reviews-heading">Reviews From Customers</h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="quote-icon">“</div>
            <p className="review-text">{review.review}</p>
            <div className="stars">
              {Array(review.stars)
                .fill("★")
                .map((star, index) => (
                  <span key={index} className="star-icon">
                    {star}
                  </span>
                ))}
            </div>
            <div className="review-author">
              <div className="author-avatar">{review.name.charAt(0)}</div>
              <div className="author-name">{review.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
