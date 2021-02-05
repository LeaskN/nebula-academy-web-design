import React from "react";
import { Carousel } from "react-bootstrap";
import "../WorkforceDevelopmentContent";

export const WorkforceCarousel = (props) => {
  const { data } = props;
  const { Item } = Carousel;
  return (
    <Carousel interval="10000">
      {data.map((element) => (
        <Item key={element.header}>
          <img
            className="d-block w-100"
            alt={element.image}
            src={element.image}
            al={element.al}
          />
          <Carousel.Caption>
            <h3>{element.header}</h3>
            <br />
            <div className="carouselParagraph">{element.body}</div>
          </Carousel.Caption>
        </Item>
      ))}
    </Carousel>
  );
};
