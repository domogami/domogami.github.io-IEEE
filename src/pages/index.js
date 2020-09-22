import React from "react";
import Link from "gatsby-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPaperPlane,
  faCalendarAlt,
  faHeart,
  faInbox,
  faLightbulb,
  faSeedling,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import IEEELogo from "../images/IEEESDLogo.png";
import photo1 from "../images/outreach.jpg";
import photo2 from "../images/technical.jpg";
import EventCard from "../components/eventCard.js";
const IndexPage = () => (
  <div>
    <div className="sidebar">
      <img src={IEEELogo} className="logo" />
      <ul>
        <a className="active" href="/">
          <FontAwesomeIcon className="icon" icon={faHome} />
          <div className="text">Overview</div>
        </a>
        <a href="#about">
          <FontAwesomeIcon className="icon" icon={faPaperPlane} />
          <div className="text">About</div>
        </a>
        <a href="#getinvolved">
          <FontAwesomeIcon className="icon" icon={faSeedling} />
          <div className="text">Get Involved</div>
        </a>
        <a href="#events">
          <FontAwesomeIcon className="icon" icon={faCalendarAlt} />
          <div className="text">Events</div>
        </a>
        <a href="#projects">
          <FontAwesomeIcon className="icon" icon={faLightbulb} />
          <div className="text">Projects</div>
        </a>
        <a href="#sponsorship">
          <FontAwesomeIcon className="icon" icon={faHeart} />
          <div className="text">Sponsorship</div>
        </a>
        <a href="#contact">
          <FontAwesomeIcon className="icon" icon={faInbox} />
          <div className="text">Contact Us</div>
        </a>
      </ul>
    </div>

    <div className="content">
      <div className="Main">
        <div className="blob"></div>
        <div className="TextGroup">
          <h1>IEEE UC San Diego</h1>
          <p>
            IEEE at UC San Diego is a non-profit pre-professional student
            organization. We are dedicated to provide engineering students with
            hands-on experiences, technical and professional development and
            other resources to help them achieve their potential.
          </p>
          <Link className="button1" to="/about/">
            <FontAwesomeIcon className="rightArrow" icon={faArrowRight} />
            Get Involved Today
          </Link>
        </div>
        <div className="Photos">
          <h1>Photos</h1>
          <div className="PhotoGrid">
            <img src={photo1}></img>
            <img src={photo2}></img>
          </div>
        </div>
      </div>
      <div className="Events">
        <h1>Events</h1>
        <EventCard
          title="ML Bootcamp"
          link="h;ojojo"
          text="fuyfiugkvug"
          color="#0059DA"
        />
        <EventCard
          title="HARD Hack"
          link="h;ojojo"
          text="fuyfiugkvug"
          color="#FFB100"
        />
        <EventCard
          title="QP Fall 2020"
          link="h;ojojo"
          text="fuyfiugkvug"
          color="#00CDDA"
        />
        <EventCard
          title="RoboFest"
          link="h;ojojo"
          text="fuyfiugkvug"
          color="#FF5051"
        />
      </div>
    </div>
    <div className="content2">
      <div className="about" id="about">
        <div className="aboutText">
          <h1>About Us</h1>
          <p1>
            We are dedicated to helping develop students into professional
            Engineers
          </p1>
          <p>
            As an organization, we strive to provide opportunities to students
            both at UC San Diego and in the larger STEM community to gain
            hands-on experience with autonomous robotics and its various
            disciplines. Throughout the year, we host dozens of events and
            workshops to teach skills not frequently taught in the classroom, as
            well as outreach events for students looking to give back to the
            STEM community. We also provide professional development and other
            resources to help students achieve their true potential as they
            develop into professional engineers.
          </p>
        </div>
      </div>
      <div className="contact" id="contact">
        <div className="contactText">
          <h1>Contact Us</h1>
          <div className="verticalStack">
            <a className="generalRow" href="mailto:ieee@eng.ucsd.edu">
              <p2 className="generalButton">General</p2>
              <p1>ieee@eng.ucsd.edu</p1>
            </a>
            <a className="projectsRow" href="mailto:projects@ieeeucsd.org">
              <p2 className="projectsButton">Projects</p2>
              <p1>projects@ieeeucsd.org</p1>
            </a>
            <a className="outreachRow" href="mailto:outreach@ieeeucsd.org">
              <p2 className="outreachButton">Outreach</p2>
              <p1>outreach@ieeeucsd.org</p1>
            </a>
            <a className="technicalRow" href="mailto:tech@ieeeucsd.org">
              <p2 className="technicalButton">Technical</p2>
              <p1>tech@ieeeucsd.org</p1>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="content3"></div>
  </div>
);

export default IndexPage;
