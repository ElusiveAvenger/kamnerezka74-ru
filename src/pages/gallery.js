import React from "react";
import { Link } from "gatsby";
import Menu from "../components/menu";
import SEO from "../components/seo";
import Card from "../components/card";
import {
  Gallery,
  ImageCard,
  ModalPreview
} from "../components/gallery/GalleryComponent";

import $ from "jquery";

import sun1 from "../images/sun1.jpg";

import balyasina_1 from "../images/works/balyasina_1.jpg";
import vase_1 from "../images/works/vase_1.jpg";
import vase__9 from "../images/works/vase__9.jpg";
// vase__9

function reset(e) {
  e.preventDefault();
  console.log("click");
}

const GalleryPage = () => (
  <>
    <SEO title="Наши работы" />
    <Menu />

    <div className="container">
      <div className="row">
        <div className="col-12">
          <hr id="turningProducts" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">
            Токарные изделия (вазы, вазоны, шары, столы и лавки)
          </h5>
        </div>
        <Gallery>
          <ImageCard img={balyasina_1} title="Балясина №1" />
          <ImageCard img={vase_1} title="Ваза №1" />
          <ImageCard img={vase__9} title="" />
        </Gallery>

        <div className="col-12">
          <hr id="crosses" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">Кресты</h5>
        </div>
        <Gallery>
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
        </Gallery>

        <div className="col-12">
          <hr id="basReliefMonuments" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">Барельефные памятники</h5>
        </div>
        <Gallery>
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
        </Gallery>

        <div className="col-12">
          <hr id="rocks" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center" id="rocks">
            Скалы
          </h5>
        </div>
        <Gallery>
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
        </Gallery>

        <div className="col-12">
          <hr id="granite" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">Элитные комплексы из гранита</h5>
        </div>
        <Gallery>
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
        </Gallery>

        <div className="col-12">
          <hr id="monuments" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">Памятники</h5>
        </div>
        <Gallery>
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
        </Gallery>

        <div className="col-12">
          <hr id="fences" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">Оградки</h5>
        </div>
        <Gallery>
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
        </Gallery>

        <div className="col-12">
          <hr id="decor" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">
            Оформление памятников (портреты, гравировка, эпитафии, доп.
            оформление)
          </h5>
        </div>
        <Gallery>
          <ImageCard img={sun1} title="title" />
          <ImageCard img={sun1} title="title" />
        </Gallery>
      </div>
    </div>
    <ModalPreview />
  </>
);

export default GalleryPage;
