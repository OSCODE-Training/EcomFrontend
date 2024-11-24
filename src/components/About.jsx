import "./About.css"
const About = () => {
  return (
    <section className="about-container">
      {/* Video Section */}
      <div className="video-section">
        <div className="video-wrapper">
          <video
            className="video-thumbnail"
            controls  
            autoPlay
            loop
            muted
            src="src\assets\855770-hd_1920_1080_30fps.mp4"
            alt="Award Video"
          />
        </div>

        <div>
      </div>
        <div className="about-content">
          <h1>Welcome to Our Company</h1>
          <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos odit ullam odio debitis rem ipsam rerum et ducimus in deleniti sunt corrupti non, consectetur exercitationem optio? Ipsa labore quos perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta facilis velit recusandae, quis officia dolorem aut debitis voluptate earum obcaecati, quaerat quisquam totam in deleniti quibusdam eaque nobis voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam nam dolorem repellendus dolore laboriosam eum, natus ipsum sint fugit? Culpa blanditiis quam fuga facere odio error. Iusto, excepturi perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto odit expedita, vero adipisci ea libero illum eum debitis quidem voluptatem autem necessitatibus tempore! Architecto error rerum, voluptates eligendi repudiandae ea?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit voluptates cum ex quasi, pariatur accusantium illum perferendis minima commodi dolorum voluptas, odio tenetur iure ad dolores, nostrum consequatur nobis? Exercitationem?
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-section">
        <div className="card" style={{ backgroundImage: "url('src/assets/pexels-pramodtiwari-13988977.jpg')"}}>
          {/* <img src="src\assets\pexels-karolina-grabowska-5202925.jpg" alt="Education" className="card-img" /> */}
          <div className="card-content">
            <h3>For Education</h3>
            <p>Interactive Technology</p>
            <button className="read-more-btn">READ MORE</button>
          </div>
        </div>
        <div className="card" style={{ backgroundImage: "url('src/assets/pexels-ekaterina-bolovtsova-6192118.jpg')"}}>
          {/* <img src="src\assets\pexels-pramodtiwari-13988977.jpg" alt="Business" className="card-img" /> */}
          <div className="card-content">
            <h3>For Business</h3>
            <p>Interactive Technology</p>
            <button className="read-more-btn">READ MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
