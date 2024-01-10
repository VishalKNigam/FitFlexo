import AOS from "aos";
import "aos/dist/aos.css";

export default function Timeline() {
  return (
    <>
      <div className="App">
        <div className="main">
          <h1 className="head ">Timelines</h1>
          <div className="cont">
            <ul>
              <li>
                <h3 className="heading">Trainers</h3>
                <p>
                Since 2022, empowering individuals on their fitness journey.{" "}
                </p>
                <a>Read More </a>
                <span className="date">Jan 2022</span>
                <span className="circle"></span>
              </li>
              <li>
                <h3 className="heading">Trainers</h3>
                <p>
                A career spanning years, committed to guiding fitness enthusiasts.{" "}
                </p>
                <a>Read More </a>
                <span className="date">Feb 2022</span>
                <span className="circle"></span>
              </li>
              <li>
                <h3 className="heading">Trainers</h3>
                <p>
                For more than a decade, leading clients toward fitness success.{" "}
                </p>
                <a>Read More </a>
                <span className="date">March 2022</span>
                <span className="circle "></span>
              </li>
              <li>
                <h3 className="heading">Trainers</h3>
                <p>
                Since the early 2023, crafting fitness routines for optimal results.{" "}
                </p>
                <a>Read More </a>
                <span className="date">April 2022</span>
                <span className="circle"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
