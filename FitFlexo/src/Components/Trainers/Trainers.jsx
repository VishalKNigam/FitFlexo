import { useEffect, useState, useRef } from "react";
import TrainerCard from "./TrainerCard";
import Loading from "../Loading";
import { Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Trainers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  const ref = useRef();

  async function FetchData(filter, page) {
    const url = filter
      ? `https://fitness-mkwg.onrender.com/trainers?specialty=${filter}`
      : `https://fitness-mkwg.onrender.com/trainers?_page=${page}&_limit=3`;
    try {
      setLoading(true);
      let res = await fetch(url);
      let resp = await res.json();

      setData(resp);
      setLoading(false);
    } catch (err) {
      console.log("error", err);
    }
  }

  useEffect(() => {
    AOS.init({ duration: 2000 });

    FetchData(filter, page);
    // ref.current = window.scrollTo(0, 0);

    window.scrollTo(0, 0);

    return () => {
      ref.current = null;
    };
  }, [filter, page]);

  if (loading) {
    return <h1 className="text-center">{<Loading />}</h1>;
  }

  return (
    <div className="container ">
      <h1 className="text-center mt-5 mb-3">
        Explore our Centres of{" "}
        <span className="themeColor">Training Excellence</span>
      </h1>
      <h5 className="text-center mb-5 ">
        Learn about the world class fitness care we provide
      </h5>
      <div className="row gap-5 ">
        <div className="col-md-3 themeBg shadow mt-3 ms-md-4 rounded  doctorSidebar pb-4">
          <div className="p-2 m-2 mt-4  rounded shadow text-center bg-white ">
            <Button
              className="fw-bold "
              value="Gym Trainer"
              variant="red"
              onClick={(e) => setFilter(e.target.value)}
            >
             Gym Trainer
            </Button>
          </div>
          <div className="p-2 m-2 mt-3 rounded shadow text-center bg-white ">
            <Button
              value="Yoga Trainer"
              className="fw-bold "
              variant="red"
              onClick={(e) => setFilter(e.target.value)}
            >
             Yoga Trainer
            </Button>
          </div>
          <div className="p-2 m-2 mt-3 rounded shadow text-center bg-white">
            <Button
              value="Cardio Trainer"
              className="fw-bold "
              variant="red"
              onClick={(e) => setFilter(e.target.value)}
            >
              Cardio Trainer
            </Button>
          </div>
          <div className="p-2 m-2 mt-3 rounded shadow text-center bg-white">
            <Button
              value="Zumba Trainer"
              className="fw-bold "
              variant="red"
              onClick={(e) => setFilter(e.target.value)}
            >
              Zumba Trainer
            </Button>
          </div>
          <div className="p-2 m-2 mt-3 rounded shadow text-center bg-white">
            <Button
              value="Dance Trainer"
              className="fw-bold "
              variant="red"
              onClick={(e) => setFilter(e.target.value)}
            >
              Dance Trainer
            </Button>
          </div>
          <div
            value="Endocrinology"
            className="p-2 m-2 mt-3 rounded shadow text-center bg-white"
          >
            <Button
              className="fw-bold "
              variant="red"
              onClick={(e) => setFilter(e.target.value)}
            >
              All Doctor
            </Button>
          </div>
        </div>

        <div ref={ref} className="col-md-8">
          {data.length > 0 && data.map((e) => <TrainerCard key={e.id} {...e} />)}
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-center gap-3">
        <Button className="btn" onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <Button
          className="btn"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
