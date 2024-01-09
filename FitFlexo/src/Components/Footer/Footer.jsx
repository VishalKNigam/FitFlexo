import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import footerBanner from "../Media/footerBanner.jpg";
export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="container-fluid text-green themeBg mt-5">
        <div className="row justify-content-center themeBg p-5 ms-md-4">
          <div className="col-md-4 themeBg px-4" data-aos="fade-up">
            <h3 className="themeBg">FitFlexo</h3>
            <img
              className="w-50 rounded"
              src={footerBanner}
              alt=""
            />
          </div>

          <div className="col-md-4 themeBg px-3" data-aos="fade-up">
  <h4 className="themeBg mb-3">Fitness Services</h4>
  <ul className="themeBg">
    <li className="themeBg">Personal Training Sessions</li>
    <li className="themeBg">Group Fitness Classes</li>
    <li className="themeBg">Nutritional Consultations</li>
    <li className="themeBg">Health Assessments</li>
    <li className="themeBg">Online Workout Plans</li>
    <li className="themeBg">Yoga and Meditation Classes</li>
    <li className="themeBg">Cardiovascular Training</li>
  </ul>
</div>

<div className="col-md-4 themeBg px-3" data-aos="fade-up">
  <h4 className="themeBg">Contact Us</h4>
  <ul className="themeBg">
    <li className="themeBg">Customer Support</li>
    <li className="themeBg">General Inquiries</li>
    <li className="themeBg">Email: fitness@fitflexo.com</li>
    <li className="themeBg">Visit Our Fitness Center</li>
    <li className="themeBg">Location: 123 Fitness Street</li>
    <li className="themeBg">Social Media Enquiries</li>
    <li className="themeBg">Connect with us on Facebook</li>
  </ul>
</div>

        </div>
      </div>
    </div>
  );
}
