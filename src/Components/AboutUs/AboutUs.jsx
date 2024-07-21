import React from "react";
import { Wrapper } from "./AboutUsStyled";
import { Card } from "./Card";
import image from "./image.png";
export function AboutUs() {
    return (
      <Wrapper>
        <Card
          img={image}
          name="Davud Halitovic"
          about="Web Developer"
          descritpion="Davud was in charge of fetching and displaying statistics of countries and their corrisponding cases.
          He is currently studying web development at Centar Nit."
          github={"https://github.com/DavudHalitovic"}
        />
        <Card
          img={image}
          name="Senad Zukorlic"
          about="Web Developer"
          descritpion="Senad was in charge of fetching and displaying covid statistics as well as design of the website.
          He is currently studying web development at Centar Nit."
          github={"https://github.com/SenadZukorlic"}
        />
      </Wrapper>
    );
  }
