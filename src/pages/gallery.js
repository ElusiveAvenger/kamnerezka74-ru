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

// 1
import balyasina_1 from "../images/works/1/balyasina_1.jpg";
import boll_1 from "../images/works/1/boll_1.jpg";
import boll_2 from "../images/works/1/boll_2.jpg";
import boll__3 from "../images/works/1/boll__3.jpg";
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

// 2
import cross_1 from '../images/works/2/cross_1.jpg';
import cross_2 from '../images/works/2/cross_2.jpg';
import cross_3 from '../images/works/2/cross_3.jpg';
import cross_4 from '../images/works/2/cross_4.jpg';
import cross_5 from '../images/works/2/cross_5.jpg';

//3
import mb_1_f from '../images/works/3/monument_with_a_bas-relief_1_front.jpg';
import mb_1_b from '../images/works/3/monument_with_a_bas-relief_1_back.jpg';
import mb_2 from '../images/works/3/monument_with_a_bas-relief_2.jpg';
import mb_3 from '../images/works/3/monument_with_a_bas-relief_3.jpg';
import cd_4 from '../images/works/3/complex_with_decor_4.jpg';
import cd_5 from '../images/works/3/complex_with_decor_5.jpg';

// 4
import rock_1 from '../images/works/4/rock_1.jpg';
import rock_2 from '../images/works/4/rock_2.jpg';
import rock_3 from '../images/works/4/rock_3.jpg';
import rock_4_1 from '../images/works/4/rock_4_1.jpg';
import rock_4_2 from '../images/works/4/rock_4_2.jpg';
import rock_5_1 from '../images/works/4/rock_5_1.jpg';
import rock_5_2 from '../images/works/4/rock_5_2.jpg';

// 5
import dove_1 from '../images/works/5/dove_1.jpg';
import dove_2 from '../images/works/5/dove_2.jpg';
import dove_3 from '../images/works/5/dove_3.jpg';
import complex_1 from '../images/works/5/complex_1.jpg';
import complex_2 from '../images/works/5/complex_2.jpg';
import complex_3 from '../images/works/5/complex_3.jpg';
import complex_with_decor_3 from '../images/works/5/complex_with_decor_3.jpg';
import complex_with_decor_3_back from '../images/works/5/complex_with_decor_3_back.jpg';
import complex_with_decor_4 from '../images/works/5/complex_with_decor_4.jpg';
import monument_with_decor_double from '../images/works/5/monument_with_decor_double.jpg';
import monument_with_decoration_black_granite from '../images/works/5/monument_with_decoration_black_granite.jpg';

// 6
import complex_with_decor_1 from '../images/works/6/complex_with_decor_1.jpg';
import complex_with_decor_2 from '../images/works/6/complex_with_decor_2.jpg';
import monument_with_bas_relief_1 from '../images/works/6/monument_with_bas-relief_1.jpg';
import monument_with_bas_relief_and_decor_1 from '../images/works/6/monument_with_bas-relief_and_decor_1.jpg';
import monument_with_decor_1 from '../images/works/6/monument_with_decor_1.jpg';
import monument_with_decor_2 from '../images/works/6/monument_with_decor_2.jpg';
import monument_with_decor_3 from '../images/works/6/monument_with_decor_3.jpg';
import monument_with_double_decor from '../images/works/6/monument_with_double_decor.jpg';

// 7
import ball_fence_1 from '../images/works/7/ball_fence_1.jpg';

// 8
import ex_1 from '../images/works/8/1.jpg';
import ex_3 from '../images/works/8/3.jpg';
import ex_4 from '../images/works/8/4.jpg';
import ex_5 from '../images/works/8/5.jpg';
import ex_6 from '../images/works/8/6.jpg';
import ex_7 from '../images/works/8/7.jpg';
import ex_8 from '../images/works/8/8.jpg';
import ex_9 from '../images/works/8/9.jpg';

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
          <ImageCard img={boll_1} title="Шар №1" />
          <ImageCard img={boll_2} title="Шар №2" />
          <ImageCard img={boll__3} title="" />
        </Gallery>

        <div className="col-12">
          <hr id="crosses" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">Кресты</h5>
        </div>
        <Gallery>
          <ImageCard img={cross_1} title="" />
          <ImageCard img={cross_2} title="" />
          <ImageCard img={cross_3} title="" />
          <ImageCard img={cross_4} title="" />
          <ImageCard img={cross_5} title="" />
        </Gallery>

        <div className="col-12">
          <hr id="basReliefMonuments" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">Барельефные памятники</h5>
        </div>
        <Gallery>
          <ImageCard img={mb_1_f} title="" />
          <ImageCard img={mb_1_b} title="" />
          <ImageCard img={mb_2} title="" />
          <ImageCard img={mb_3} title="" />
          <ImageCard img={cd_4} title="" />
          <ImageCard img={cd_5} title="" />
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
          <ImageCard img={rock_1} title="Скала №1" />
          <ImageCard img={rock_2} title="Скала №2" />
          <ImageCard img={rock_3} title="Скала №3" />
          <ImageCard img={rock_4_1} title="Скала №4" />
          <ImageCard img={rock_4_2} title="Скала №4 (вдали)" />
          <ImageCard img={rock_5_1} title="Скала №5" />
          <ImageCard img={rock_5_2} title="Скала №5 (2 вариант)" />
        </Gallery>

        <div className="col-12">
          <hr id="granite" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">Элитные комплексы из гранита</h5>
        </div>
        <Gallery>
          <ImageCard img={dove_1} title="" />
          <ImageCard img={dove_2} title="" />
          <ImageCard img={dove_3} title="" />
          <ImageCard img={complex_1} title="" />
          <ImageCard img={complex_2} title="" />
          <ImageCard img={complex_3} title="" />
          <ImageCard img={complex_with_decor_3} title="" />
          <ImageCard img={complex_with_decor_3_back} title="" />
          <ImageCard img={complex_with_decor_4} title="" />
          <ImageCard img={monument_with_decor_double} title="" />
          <ImageCard img={monument_with_decoration_black_granite} title="" />
        </Gallery>

        <div className="col-12">
          <hr id="monuments" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">Памятники</h5>
        </div>
        <Gallery>
          <ImageCard img={complex_with_decor_1} title="title" />
          <ImageCard img={complex_with_decor_2} title="title" />
          <ImageCard img={monument_with_bas_relief_1} title="title" />
          <ImageCard img={monument_with_bas_relief_and_decor_1} title="title" />
          <ImageCard img={monument_with_decor_1} title="title" />
          <ImageCard img={monument_with_decor_2} title="title" />
          <ImageCard img={monument_with_decor_3} title="title" />
          <ImageCard img={monument_with_double_decor} title="title" />
        </Gallery>

        <div className="col-12">
          <hr id="fences" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">Оградки</h5>
        </div>
        <Gallery>
          <ImageCard img={ball_fence_1} title="Оградка с шарами" />
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
          <ImageCard img={ex_1} title="" />
          <ImageCard img={ex_3} title="" />
          <ImageCard img={ex_4} title="" />
          <ImageCard img={ex_5} title="" />
          <ImageCard img={ex_6} title="" />
          <ImageCard img={ex_7} title="" />
          <ImageCard img={ex_8} title="" />
          <ImageCard img={ex_9} title="" />
        </Gallery>
      </div>
    </div>
    <ModalPreview />
  </>
);

export default GalleryPage;
