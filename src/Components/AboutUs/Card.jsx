import React from "react";
import { CardDiv } from "./AboutUsStyled";
import gitlogo from "./github.png";

export function Card({img, name, about, descritpion, github}) {
    return (
        <CardDiv>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>{about}</h4>
            <p>{descritpion}</p>
            <a href={github}><img src={gitlogo} alt="" style={{width: "145px", height: "60px"}} /></a>
        </CardDiv>
    );
}
