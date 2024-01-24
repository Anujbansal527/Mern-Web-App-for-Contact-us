import Analytic from "../Component/Analytics";

const Home = () => {

    return (
    <>
    <main>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1>Welcome to Home Page</h1>
            <br/>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, a
              porro earum distinctio dolorum corrupti fuga libero hic natus et
              molestiae, vero animi odio. Earum odit quibusdam ipsum aspernatur
              reprehenderit corrupti accusantium quisquam repudiandae, illum
              neque facere, consequatur magni amet aliquam. Beatae saepe, quos
              illum odit facilis libero dolorem ut? Perspiciatis temporibus quos
              iste magnam harum quis modi, exercitationem a optio officia, iusto
            </p>
            <br/>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect Now</button>
              </a>

              <a href="/service">
                <button className="btn secondary-btn">Services</button>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src="" alt="image" width={""} height={""} />
          </div>
        </div>
      </section>
    </main>

   <Analytic/>
  
   <main>
      <section className="section-hero">
        <div className="container grid grid-two-cols">

        <div className="hero-image">
            <img src="" alt="image" width={""} height={""} />
          </div>
          
          <div className="hero-content">
            <h1>Welcome to Home Page</h1>
            <br/>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, a
              porro earum distinctio dolorum corrupti fuga libero hic natus et
              molestiae, vero animi odio. Earum odit quibusdam ipsum aspernatur
              reprehenderit corrupti accusantium quisquam repudiandae, illum
              neque facere, consequatur magni amet aliquam. Beatae saepe, quos
              illum odit facilis libero dolorem ut? Perspiciatis temporibus quos
              iste magnam harum quis modi, exercitationem a optio officia, iusto
            </p>
            <br/>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect Now</button>
              </a>

              <a href="/service">
                <button className="secondary-btn">Services</button>
              </a>
            </div>
          </div>

          
        </div>
      </section>
    </main>
  </>
  );
};

export default Home;
