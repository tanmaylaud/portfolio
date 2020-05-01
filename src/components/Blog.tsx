import React, { Component } from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import "./Blog.css";
import { FaMedium } from "react-icons/fa";

class Blog extends Component {
  state = {};
  render() {
    return (
      <React.StrictMode>
        <div>
          <h1 className="heading">
            <Slide left>Blog.</Slide>
          </h1>
          <div className="row">
            <Fade bottom>
              <div className="column">
                <div className="card">
                  <a href="https://medium.com/@tanmaylaud/failure-a-neccessary-evil-511bc71f91ad"></a>
                  <h4>
                    <FaMedium /> Failure - A neccessary evil
                  </h4>
                  <img
                    className="image"
                    src="https://miro.medium.com/fit/c/1400/420/1*BhJL0VLWkRPQwRu0MXx6oA.jpeg"
                  />
                  <p>Based on a personal experience</p>
                  <a href="https://medium.com/@tanmaylaud/failure-a-neccessary-evil-511bc71f91ad">
                    Read the article on medium.com
                  </a>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="column">
                <div className="card">
                  <h4>
                    <FaMedium /> The Musical Similarity of Popular Songs -A
                    Review Article
                  </h4>
                  <img
                    className="image"
                    src="https://miro.medium.com/max/1400/1*fJXxPGtLtfhA2v3V9bVVVQ.png"
                  />
                  <p>
                    I strongly believe that there are no rules when it comes to
                    creativity, be it music or painting or writing...
                  </p>
                  <a href="https://medium.com/@tanmaylaud/the-musical-similarity-of-popular-songs-a-review-article-c47d5af52e62">
                    Read the article on medium.com
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}

export default Blog;
