import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Crousel() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="pt-5 pb-5">
        <div className="container">
          <h1 className="my-1 text-center">
            International <span className="themeColor">Trainers</span>
          </h1>
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6 text-right pe-5">
              <a
                className="btn btn-primary mb-3 mr-1"
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-arrow-left"></i>
              </a>
              <a
                className="btn btn-primary mb-3 me-md-3"
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
            <div className="col-11 d-block m-auto">
              <div
                id="carouselExampleIndicators2"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div
                          className="card border-0 shadow"
                          data-aos="fade-up"
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src="https://www.nourishmovelove.com/wp-content/uploads/2022/02/low-impact-cardio.jpg"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Cardio Trainers
                            </h4>
                            <p className="card-text">
                            Empowering workouts guided by experienced trainers, shaping your fitness destiny.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div
                          className="card border-0 shadow"
                          data-aos="fade-up"
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src="https://media.istockphoto.com/id/1286137192/photo/workout-with-male-personal-trainer-in-health-club.webp?b=1&s=170667a&w=0&k=20&c=YxDjpSt9ZkCg__3gaLd4w-ygef2njiOPCtWs6JHJoFw="
                          />
                          <div className="card-body">
                            <h4 className="card-title">Soft Excercises</h4>
                            <p className="card-text">
                            Dedicated trainers crafting stronger, healthier versions of you, one session at a time.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div
                          className="card border-0 shadow rounded"
                          data-aos="fade-up"
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src="https://img.freepik.com/premium-photo/female-team-exercising-yoga-lesson-with-instructor-standing-yoga-poses-trainer-helping-doing-yoga-asanas-copy-space_10069-8193.jpg"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Yoga specialist
                            </h4>
                            <p className="card-text">
                            Transformative coaching from our skilled trainers, igniting your fitness journey.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div
                          className="card border-0 shadow rounded "
                          data-aos="fade-up"
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src="https://images.everydayhealth.com/images/healthy-living/fitness/how-to-get-started-dance-workouts-1440x810.jpg"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Dance specialist
                            </h4>
                            <p className="card-text">
                            Expert trainers, customized plans, and your pathway to fitness excellence.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div
                          className="card card border-0 shadow rounded"
                          data-aos="fade-up"
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src="https://abfitnesshub.com.au/wp-content/uploads/2022/10/Cover-Photo-e1665548034598-1170x694.jpg"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Cardio specialist
                            </h4>
                            <p className="card-text">
                            Our trainers - your partners in achieving fitness milestones, together, stronger.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div
                          className="card card border-0 shadow rounded"
                          data-aos="fade-up"
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src="https://cdn.outsideonline.com/wp-content/uploads/2020/04/27/workout-home-youtube_h.jpg?crop=25:14&width=500&enable=upscale"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Online Trainers
                            </h4>
                            <p className="card-text">
                            Guidance from seasoned trainers, sculpting bodies, and building resilience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div
                          className="card card border-0 shadow rounded"
                          data-aos="fade-up"
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src="https://cdn.cheapism.com/images/No_Pain_No_Gain.min-720x376.png"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Specialists
                            </h4>
                            <p className="card-text">
                            Fitness mentors sculpting greatness, guiding you to surpass your limits.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div
                          className="card card border-0 shadow rounded"
                          data-aos="fade-up"
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/04/Cardio-indoor-bike.jpg?quality=82&strip=1"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Trainers
                            </h4>
                            <p className="card-text">
                            Personalized training, expert advice - our trainers redefine your fitness story.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div
                          className="card card border-0 shadow rounded"
                          data-aos="fade-up"
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src="https://as2.ftcdn.net/v2/jpg/02/77/79/65/1000_F_277796544_kAUgHdP1aqG7aCBCeNEwoeVa149rdg7D.jpg"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Child Trainers
                            </h4>
                            <p className="card-text">
                            Trainers focused on your success, fostering commitment, and smashing goals.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
