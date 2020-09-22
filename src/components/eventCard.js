import React, { Component } from "react";
import "./eventCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../../node_modules/aos/dist/aos.css";

class eventCard extends Component {
  componentDidMount() {
    const isBrowser = typeof window !== "undefined";
    const AOS = isBrowser ? require("aos") : undefined;

    this.aos = AOS;
    this.aos.init();
  }

  componentDidUpdate() {
    this.aos.refresh();
  }
  render() {
    return (
      <div className="Card" style={{ backgroundColor: this.props.color }}>
        <h1>{this.props.title}</h1>
        <p>
          <FontAwesomeIcon className="eventInfo" icon={faArrowRight} />
          {this.props.text}
        </p>
      </div>
    )
  }
}

export default eventCard;
