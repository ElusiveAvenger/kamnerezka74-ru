import React from "react";
import Menu from "../components/menu";
import SEO from "../components/seo";
import Card from "../components/card";

import sun1 from "../images/sun1.jpg";

import balyasina_1 from '../images/works/1/balyasina_1.jpg';
import vase_1 from '../images/works/1/vase_1.jpg';
import vase__9 from '../images/works/1/vase__9.jpg';
// vase__9

const CatalogPage = () => (
  <>
    <SEO title="Наши работы" />
    <Menu />

    <div className="container">
      <div className="row">
        <div className="col-12">
          <hr id="turningProducts" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">Токарные изделия (вазы, вазоны, шары, столы и лавки)</h5>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-center flex-wrap">
            <Card title="Балясина №1" img={balyasina_1} />
            <Card title="Ваза №1" img={vase_1} />
            <Card img={vase__9} />
          </div>
        </div>

        <div className="col-12">
          <hr id="crosses" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">Кресты</h5>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-center flex-wrap">
            <Card title="Крест" description="крест из мрамора" img={sun1} />
            <Card title="Крест" description="крест из белого мрамора" img={sun1} />
            <Card title="Крест из мрамора" description="каменная ваза" img={sun1} />
          </div>
        </div>

        <div className="col-12">
          <hr id="basReliefMonuments" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">Барельефные памятники</h5>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-center flex-wrap">
            <Card title="Памятник" description="" img={sun1} />
            <Card title="Памятник" description="крест из белого мрамора" img={sun1} />
            <Card title="Барельефный памятник" description="каменная ваза" img={sun1} />
          </div>
        </div>

        <div className="col-12">
          <hr id="rocks" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center" id="rocks">Скалы</h5>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-center flex-wrap">
            <Card title="Скала" description="Скалы из змеевика" img={sun1} />
            <Card title="Скала" description="Скалы из змеевика" img={sun1} />
            <Card title="Скала" description="Скалы из змеевика" img={sun1} />
            <Card title="Скалы из змеевика" description="Скалы из змеевика" img={sun1} />
            <Card title="Скалы из змеевика" description="Скалы из змеевика" img={sun1} />
            <Card title="Скалы из змеевика" description="Скалы из змеевика" img={sun1} />
            <Card title="Скалы из змеевика" description="Скалы из змеевика" img={sun1} />
            <Card title="Скалы из змеевика" description="Скалы из змеевика" img={sun1} />
          </div>
        </div>

        <div className="col-12">
          <hr id="granite" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">Элитные комплексы из гранита</h5>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-center flex-wrap">
            <Card title="Скала" description="Скалы из змеевика" img={sun1} />
            <Card title="Скала" description="Скалы из змеевика" img={sun1} />
            <Card title="Скала" description="Скалы из змеевика" img={sun1} />
            <Card title="Скалы из змеевика" description="Скалы из змеевика" img={sun1} />
            <Card title="Скалы из змеевика" description="Скалы из змеевика" img={sun1} />
            <Card title="Скалы из змеевика" description="Скалы из змеевика" img={sun1} />
            <Card title="Скалы из змеевика" description="Скалы из змеевика" img={sun1} />
            <Card title="Скалы из змеевика" description="Скалы из змеевика" img={sun1} />
            <Card title="Скала" description="Скалы из змеевика" img={sun1} />
            <Card title="Скала" description="Скалы из змеевика" img={sun1} />
            <Card title="Скалы из змеевика" description="Скалы из змеевика" img={sun1} />
            <Card title="Скалы из змеевика" description="Скалы из змеевика" img={sun1} />
            <Card title="Скалы из змеевика" description="Скалы из змеевика" img={sun1} />
          </div>
        </div>

        <div className="col-12">
          <hr id="monuments" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">Памятники</h5>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-center flex-wrap">
            <Card title="Памятник" description="" img={sun1} />
            <Card title="Памятник" description="крест из белого мрамора" img={sun1} />
            <Card title="Барельефный памятник" description="каменная ваза" img={sun1} />
          </div>
        </div>

        <div className="col-12">
          <hr id="fences" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">Оградки</h5>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-center flex-wrap">
            <Card title="Оградка" description="белая" img={sun1} />
            <Card title="Оградка" description="мрамор" img={sun1} />
            <Card title="Оградка" description="гранит" img={sun1} />
          </div>
        </div>

        <div className="col-12">
          <hr id="decor" />
        </div>
        <div className="col-12" style={{ marginTop: "3rem" }}>
          <h5 className="text-center">Оформление памятников (портреты, гравировка, эпитафии, доп. оформление)</h5>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-center flex-wrap">
            <Card title="Декорация" description="по вашему макету" img={sun1} />
            <Card title="Полировка" description="по вашему желанию" img={sun1} />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default CatalogPage;
