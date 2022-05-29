import React from "react";
import { Carousel } from "react-bootstrap";
const CarouselBoot = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1603720913661-76d1053714e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Action Camera</h3>
            <p>
              An action camera is a small, rugged, waterproof digital camera
              designed for capturing immersive action shots. They allow you to
              jump right in and become part of the adventure to capture photos
              and videos in a way that traditional cameras or smartphones just
              can't.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Bike</h3>
            <p>
              A bicycle, also called a pedal cycle, bike or cycle, is a
              human-powered or motor-powered assisted, pedal-driven,
              single-track vehicle, having two wheels attached to a frame, one
              behind the other. A bicycle rider is called a cyclist, or
              bicyclist.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Smartphones</h3>
            <p>
              A smartphone is a handheld electronic device that provides a
              connection to a cellular network and the internet. The world's
              first smartphone was created by IBM in 1994, nicknamed Simon. 1.
              The introduction of smartphones dramatically altered the
              telecommunications sector.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselBoot;
