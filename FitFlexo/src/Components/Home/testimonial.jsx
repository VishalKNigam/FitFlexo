import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@mui/material";

export default function Testimonial() {
  let page = 0;

  const handleNext = () => {
    page++;
    console.log(page);
  };

  const handlePrev = () => {
    page--;
  };

  let arr = [
    {
      Image:
        "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon.png",
      name: "MUkhiya G",
    },
    {
      Image:
        "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon.png",
      name: "MUkhiya G",
    },
  ];

  // import { useEffect} from "react";
  // import AOS from "aos";
  // import "aos/dist/aos.css";
  // data-aos="fade-up"

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="container mt-5 d-none d-lg-block">
        <h2 className="text-center my-3">Testimonial</h2>
        <div className="row justify-content-center mt-3">
          <h4 className="text-center mb-3">
            Feedback by our <span className="themeColor">Previous Clients</span>
          </h4>

          <div className="col-md-11 themeBg p-5 rounded m-2 text-white">
            <div className="themeBg mx-5 d-flex">
              <img
                className="rounded-circle ms-5 testImg"
                src={"https://s3.amazonaws.com/shecodesio-production/uploads/files/000/017/717/original/online-female-personal-trainer_23-2148564217-2.jpg?1632678018"}
                alt=""
              />
              <p className="themeBg m-2 ms-4" data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, a beatae. Mollitia est exercitationem totam debitis
                facere velit deserunt rem fuga sequi cumque blanditiis eveniet
                illum vero, id minus adipisci!
              </p>
            </div>
            <div className="themeBg mx-5  ">
              <div className="border w-50 d-block m-auto "> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
