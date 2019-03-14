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

import balyasina_1 from "../images/works/1/balyasina_1.jpg";
import vase_1 from "../images/works/1/vase_1.jpg";
import vase_2 from "../images/works/1/vase_2.jpg";
import vase_3 from "../images/works/1/vase_3.jpg";
import vase_4 from "../images/works/1/vase_4.jpg";
import vase_5 from "../images/works/1/vase_5.jpg";
import vase_6 from "../images/works/1/vase_6.jpg";
import vase_7 from "../images/works/1/vase_7.jpg";
import vase_8 from "../images/works/1/vase_8.jpg";
import vase_9 from "../images/works/1/vase_9.jpg";
import vase_10 from "../images/works/1/vase_10.jpg";
import vase_11 from "../images/works/1/vase_11.jpg";
import vase_12 from "../images/works/1/vase_12.jpg";
import vase_13 from "../images/works/1/vase_13.jpg";
import vase_14 from "../images/works/1/vase_14.jpg";
import vase_15 from "../images/works/1/vase_15.jpg";
import vase_16 from "../images/works/1/vase_16.jpg";
import vase_17 from "../images/works/1/vase_17.jpg";
import vase_18 from "../images/works/1/vase_18.jpg";
import vase_19 from "../images/works/1/vase_19.jpg";
import vase_20 from "../images/works/1/vase_20.jpg";
import vase_21 from "../images/works/1/vase_21.jpg";
import vase_22 from "../images/works/1/vase_22.jpg";
import vase__1 from "../images/works/1/vase__1.jpg";
import vase__2 from "../images/works/1/vase__2.jpg";
import vase__3 from "../images/works/1/vase__3.jpg";
import vase__4 from "../images/works/1/vase__4.jpg";
import vase__5 from "../images/works/1/vase__5.jpg";
import vase__6 from "../images/works/1/vase__6.jpg";
import vase__7 from "../images/works/1/vase__7.jpg";
import vase__8 from "../images/works/1/vase__8.jpg";
import vase__9 from "../images/works/1/vase__9.jpg";
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
          <ImageCard img={balyasina_1} title="Балясина №1" top="-25%" />
          <ImageCard img={vase_1} title="Ваза №1" />
          <ImageCard img={vase_2} title="Ваза №2" />
          <ImageCard img={vase_3} title="Ваза №3" />
          <ImageCard img={vase_4} title="Ваза №4" />
          <ImageCard img={vase_5} title="Ваза №5" />
          <ImageCard img={vase_6} title="Ваза №6" />
          <ImageCard img={vase_7} title="Ваза №7" />
          <ImageCard img={vase_8} title="Ваза №8" />
          <ImageCard img={vase_9} title="Ваза №9" />
          <ImageCard img={vase_10} title="Ваза №10" />
          <ImageCard img={vase_11} title="Ваза №11" />
          <ImageCard img={vase_12} title="Ваза №12" />
          <ImageCard img={vase_13} title="Ваза №13" />
          <ImageCard img={vase_14} title="Ваза №14" />
          <ImageCard img={vase_15} title="Ваза №15" />
          <ImageCard img={vase_16} title="Ваза №16" />
          <ImageCard img={vase_17} title="Ваза №17" />
          <ImageCard img={vase_18} title="Ваза №18" />
          <ImageCard img={vase_19} title="Ваза №19" />
          <ImageCard img={vase_20} title="Ваза №20" />
          <ImageCard img={vase_21} title="Ваза №21" />
          <ImageCard img={vase_22} title="Ваза №22" />
          <ImageCard img={vase__1} title="" />
          <ImageCard img={vase__2} title="" />
          <ImageCard img={vase__3} title="" />
          <ImageCard img={vase__4} title="" />
          <ImageCard img={vase__5} title="" />
          <ImageCard img={vase__6} title="" />
          <ImageCard img={vase__7} title="" />
          <ImageCard img={vase__8} title="" />
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
