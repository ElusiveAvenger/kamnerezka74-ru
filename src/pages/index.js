import React from "react";

import defaultImage from "../images/gatsby-astronaut.png";
import logoImage from "../images/gatsby-icon.png";
import img1 from "../images/august33.jpg";
import img2 from "../images/flow-239.jpg";
import img3 from "../images/oboi-na-rabochiy-stol-osen-1.jpg";

import sun1 from "../images/sun1.jpg";
import sun2 from "../images/sun2.png";
import sun3 from "../images/sun3.png";

import Menu from "../components/menu";
import MainTitle from "../components/mainTitle";
import SEO from "../components/seo";

const IndexPage = () => (
  <>
    <SEO title="Главная"/>
    <Menu />

    <main role="main">
      <MainTitle />

      <div className="container">
        <h3>Каменная мастерская представляет вашему вниманию изготовление:</h3>
        <p>- памятников (от простых до сложных)</p>
        <p>- разных белых крестов из мрамора</p>
        <p>- элитных мемориальных комплексов из гранита</p>
        <p>
          - различных видов токарных изделий (вазочки, вазоны, балясины, шары и
          др.)
        </p>
        <p>- каменных оградок</p>
        <p>- комплексов (столы и лавочки)</p>
        <h4>Принимаются заказы по индивидуальным эскизам.</h4>
        <p>Мы работаем с 2008 года</p>
      </div>
    </main>
  </>
);

export default IndexPage;
