import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <section className='container mt-4' style={{ marginBottom: "100px" }}>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card mb-3'>
            <div className='card-body'>
              <div className='row ml-1 align-items-center'>
                <img
                  className='navbar-logo-image mr-3'
                  src={"logo.svg"}
                  alt='logo'
                  width='30'
                  height='30'
                />
                <h3 className='card-title'>About IdeaHub</h3>
              </div>
              <p className='card-text'>
                Welcome to IdeaHub, a vibrant platform where knowledge and ideas
                come together! IdeaHub is your go-to destination for sharing
                insights, experiences, and innovative thoughts with a community
                of like-minded individuals. Dive into a world where users from
                diverse backgrounds connect to showcase their expertise and
                contribute to a collective pool of wisdom.
              </p>
              <p className='card-text'>
                Explore, learn, and inspire others as we build a community
                driven by the spirit of collaboration and knowledge sharing.
                Join IdeaHub and let your ideas spark new conversations, foster
                learning, and make a positive impact on the world!
                <br />
                <br />
                You can <Link to='/signup'>register</Link> or{" "}
                <Link to='/login'>login</Link> to get started!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
