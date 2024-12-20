import './Herosec.css';

const Herosection = () => {
  return (
    <div className='herosec'>
      <div className="hero-section">
        <h1 className="hero-heading">
          Interactive Panel for Business <br />
          and Education
        </h1>
        <p className="hero-subheading">Multiple Sizes</p>
        <button className="hero-button">Read More</button>      
      </div>
      <div className='image'>
          <img src="src\assets\meeting6.jpg" alt="" id='heroimg'/>
      </div>
    </div>
    
  );
};

export default Herosection;
