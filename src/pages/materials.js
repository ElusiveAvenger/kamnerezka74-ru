import React from "react";
import Menu from "../components/menu";
import SEO from "../components/seo";

import sun2 from "../images/sun2.png";
import CardMat from "../components/cardMat";

import graniteGabbro from '../images/materials/graniteGabbro.jpg';
import graniteDymovsky from '../images/materials/graniteDymovsky.jpg';
import graniteMansurovsky from '../images/materials/graniteMansurovsky.jpg';
import graniteFoxHill from '../images/materials/graniteFoxHill.jpg';
import graniteKapustinsky_Ukraine from '../images/materials/graniteKapustinsky_Ukraine.jpg';
import marble_Coelga from '../images/materials/marble_Coelga.jpg';
import marbleUfaleysky from '../images/materials/marbleUfaleysky.jpg';
import marblePolevskoy from '../images/materials/marblePolevskoy.jpg';
import serpentinite_serpentine from '../images/materials/serpentinite_serpentine.jpg';
import graniteGabbronorite_Sibay from '../images/materials/graniteGabbronorite_Sibay.jpg';
//gabbronoriteGranite_Sibay

const MaterialsPage = () => (
  <>
    <SEO title="Материалы" />
    <Menu />

    <div className="container" style={{ marginTop: "2rem" }}>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-center flex-wrap">
            <CardMat title="Габбро гранит" img={graniteGabbro} />
            <CardMat title="Гранит дымовский" img={graniteDymovsky} />
            <CardMat title="Гранит мансуровский" img={graniteMansurovsky} />
            <CardMat title="Гранит Лисья горка" img={graniteFoxHill} />
            <CardMat title="Гранит капустинский (Украина)" img={graniteKapustinsky_Ukraine} />
            <CardMat title="Мрамор Коелга" img={marble_Coelga} />
            <CardMat title="Мрамор Уфалейский" img={marbleUfaleysky} />
            <CardMat title="Мрамор Полевской" img={marblePolevskoy} />
            <CardMat title="Серпентинит (Змеевик)" img={serpentinite_serpentine} />
            <CardMat title="Гранит габбронорит Сибай" img={graniteGabbronorite_Sibay} />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default MaterialsPage;
