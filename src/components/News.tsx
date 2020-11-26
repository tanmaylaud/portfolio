import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Fade from "react-reveal/Fade";

export default function News(){
    return (
    <React.Fragment>
        <h1>
            <Fade bottom cascade>
                Recent News.
            </Fade>
        </h1>
        <Carousel
            autoPlay
            dynamicHeight
            infiniteLoop
            swipeable
            interval={6000}
            >
            <div>
            <iframe src="https://www.youtube.com/embed/C7RDrWSAiKM?start=753"  height="500" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p>AI for Startups: Building Sophisticated AI Models in 8 Weeks</p>
            </div>
            <div>
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6723115270413574144" height="500" frameBorder="0" allowFullScreen title="Embedded post"></iframe>
            </div>
            <div>
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6696456019159134208" height="500" frameBorder="0" allowFullScreen title="Embedded post"></iframe>
            </div>
            <div>
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6723952896074883072" height="500" frameBorder="0" allowFullScreen title="Embedded post"></iframe>
            </div>
            <div>
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6719608364415926272" height="500" frameBorder="0" allowFullScreen title="Embedded post"></iframe>
            </div>
        </Carousel>
        </React.Fragment>
    );
}