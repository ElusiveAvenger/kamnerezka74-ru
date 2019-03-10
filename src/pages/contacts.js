import React from "react";
import Menu from "../components/menu";
import SEO from "../components/seo";

const ContactsPage = () => (
  <>
    <SEO title="Контакты" />
    <Menu />

    <div className="container mt-5">
      <div className="card align-middle">
        <div className="card-header">Контакты</div>
        <div className="card-body">
          <form>
            <div className="form-group row">
              <label htmlFor="staticPhone" className="col-sm-2 col-form-label">
                Viber
                <br />
                Whatsup
                <br />
                Телефон
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="staticPhone"
                  value="+7 (912) 326-01-43"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="staticEmail"
                  value="info@kamnerezka74.ru"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="card-footer text-muted">
          <p className="float-right">{new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  </>
);

export default ContactsPage;
