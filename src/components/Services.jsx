import "./Services.css"
const Services = () => {
  const services = [
    { id: 1, title: "Service 1", image: "src/assets/multitouch tech.png" },
    { id: 2, title: "Service 2", image: "src/assets/customization.png" },
    { id: 3, title: "Service 3", image: "src/assets/betterwarrenties.png" },
    { id: 4, title: "Service 4", image: "src/assets/energy.png" },
    { id: 5, title: "Service 5", image: "src/assets/ultraHDres.png" },
  ];

  return (

    <div className="services">
      <h1 className="services-company">
        What sets evota's interactive displays apart?
      </h1>
      <div className="underline-div"></div>
      <br />
      <div className="services-container">
      {services.map((service) => (
        <div key={service.id} className="service-box">
          <img src={service.image} alt={service.title} className="service-image" />
          <p className="service-text">{service.title}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Services