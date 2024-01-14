import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import UsersList from "./UsersList";
import TrainersList from "./TrainersList";
import AddTrainerForm from "./AddTrainer";
import Message from "./Message";
import BookingLoading from "../Booking/BookingLoading";

export default function Dashboard() {
  const [filter, setFilter] = useState("/trainers");

  useEffect(() => {
    // Scroll to the top of the page whenever filter changes
    window.scrollTo(0, 0);
  }, [filter]);
  return (
    <div>
      <div className="container-fluid mt-4">
        <h1 className="text-center themeColor mb-4">Admin Page</h1>
        <div className="row justify-content-center ">
          <div className="col-md-2 d-flex flex-column doctorSidebar bg-white shadow">
            <div className="p-2 m-2 mt-3 rounded shadow text-center themeBg">
              <Button
                className="btn px-4"
                onClick={(e) => setFilter(e.target.value)}
                value={"/trainers"}
              >
                Trainers
              </Button>
            </div>
            <div className="p-2 m-2 mt-3 rounded shadow text-center themeBg">
              <Button
                className="btn px-3"
                onClick={(e) => setFilter(e.target.value)}
                value={"/user"}
              >
                Users
              </Button>
            </div>
            <div className="p-2 m-2 mt-3 rounded shadow text-center  themeBg">
              <Button
                className="btn px-4"
                onClick={(e) => setFilter(e.target.value)}
                value={"/addTrainer"}
              >
                Add Trainer
              </Button>
            </div>
            <div className="p-2 m-2 mt-3 rounded shadow text-center  themeBg">
              <Button
                className="btn px-4"
                onClick={(e) => setFilter(e.target.value)}
                value={"/contact"}
              >
                Extra
              </Button>
            </div>
          </div>

          <div className="col-md-9">
            {filter == "/trainers" ? (
              <TrainersList />
            ) : filter == "/user" ? (
              <UsersList />
            ) : filter == "/addTrainer" ? (
              <AddTrainerForm />
            ) : filter == "/contact" ? (
              <Message />
            ) : (
              <div>
                <img
                  className="w-75 ms-md-5 rounded"
                  src="https://www.scrolldroll.com/wp-content/uploads/2020/09/Hum-karte-hai-prabandh-Mirzapur-Memes-750x430.jpg"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
