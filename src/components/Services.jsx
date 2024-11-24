import "./Services.css"
const Services = () => {
  const services = [
    { id: 1, title: "Service 1", image: "" },
    { id: 2, title: "Service 2", image: "" },
    { id: 3, title: "Service 3", image: "" },
    { id: 4, title: "Service 4", image: "" },
    { id: 5, title: "Service 5", image: "" },
  ];

  return (

    <div className="services">
      <h1 className="services-company">
        Services our Company provides
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