import { useAuth } from "../Store/auth";

const Service = () => {
  const { service } = useAuth();

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>

      <div className="container grid grid-three-cols">
        {service.map((currEle, index) => {
          const { price, description, provider, service } = currEle;

          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img src="" alt="card" width="500px" height="500px"/>
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
