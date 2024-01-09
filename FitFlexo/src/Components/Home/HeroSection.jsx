import { Button } from "@mui/material";
import heroImg from "../Media/workout.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

export default function HeroSection() {
  let Navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleClick = () => {
    if (isAuth) {
      Navigate("/trainers");
    } else {
      Navigate("/register");
    }
  };

  return (
    <>
      <div className="container text-center text-md-start p-4">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-6 mt-md-5 pt-md-4" data-aos="fade-up">
            <h1 className="mt-md-5 pt-md-5 ps-md-5">
              Elevate Your <span className="themeColor">Fitness Journey</span>{" "}
            </h1>

            <p className="mt-4 ps-md-5 me-3">
              Push your limits and break barriers to achieve your fitness goals.
              Embrace the sweat, dedication, and perseverance to transform your
              body and mind.
            </p>
            <Button
              onClick={handleClick}
              className="btn mt-4 ms-md-5 px-3 fw-bold"
            >
              Book Appointment
            </Button>
          </div>

          <div className="col-md-6" data-aos="fade-up">
            <img className="w-100" src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
