import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@mui/material/Button";
import { AuthContext } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

export default function TrainerCard({ name, specialty, image }) {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleClick = () => {
    navigate("/appointment");
  };
  return (
    <div className="container my-3 text-center text-md-start ">
      <div className="row justify-content-center ">
        <div className="col-md-12 shadow p-3 rounded ">
          <div className="row">
            <div className="col-md-4">
              <img
                className="w-100 h-100 rounded object-fit-cover"
                src={image}
                alt=""
              />
            </div>
            <div className="col-md-8 p-2 ps-3">
              <h3 className="mt-2">Trainer: {name}</h3>
              <h5>{specialty}</h5>
              <h5>Fee: 500</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dolor saepe aliquid qui cum enim quas .
              </p>
              <Button
                type="button"
                className="btn btn-primary fw-bold px-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                disabled={!isAuth}
                onClick={handleClick}
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
