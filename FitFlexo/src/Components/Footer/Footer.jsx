import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import fitnessChart from "../Media/fitnessChart.avif";
export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="container-fluid text-white themeBg mt-5">
        <div className="row justify-content-center themeBg p-5 ms-md-4">
          <div className="col-md-4 themeBg px-4" data-aos="fade-up">
            <h3 className="themeBg">FitFlexo</h3>
            <img
              className="w-50 rounded"
              src={fitnessChart}
              alt=""
            />
          </div>

          <div className="col-md-4 themeBg px-3" data-aos="fade-up">
  <h4 className="themeBg mb-3">Fitness Services</h4>
  <ul className="themeBg">
    <li className="themeBg">Personal Training</li>
    <li className="themeBg">Fitness Classes</li>
    <li className="themeBg">Health Assessments</li>
    <li className="themeBg">Online Workout</li>
  </ul>
</div>

<div className="col-md-4 themeBg px-3" data-aos="fade-up">
  <h4 className="themeBg">Contact Us</h4>
  <ul className="themeBg">
    <li className="themeBg">Customer Support</li>
    <li className="themeBg">Visit Center</li>
    <li className="themeBg">Fitness Street</li>
    <li className="themeBg">Social Media</li>
  </ul>
</div>

        </div>
      </div>
    </div>
  );
}
