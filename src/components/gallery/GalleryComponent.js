import React from "react";
import $ from "jquery";
import { Link } from "gatsby";

function reset(e) {
  e.preventDefault();
}

const ImageCard = ({ img, title, top }) => (
  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <Link className="align-text-middle"
      to=""
      onClick={reset}
      data-toggle="modal"
      data-target="#exampleModalCenter"
      data-src={img}
      data-title={title}
    >
      <img className="img-responsive align-middle" src={img} style={{top: top}} />
    </Link>
  </li>
);

const Gallery = ({ children }) => (
  <div className="col-12 demo-gallery">
    <ul className="list-unstyled row justify-content-center">{children}</ul>
  </div>
);

const ModalPreview = () => (
  <div
    className="modal fade"
    id="exampleModalCenter"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle" />
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <img className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
);

function init(location) {
  if (
    location &&
    location.pathname &&
    location.pathname.indexOf("gallery") > -1
  ) {
    $("#exampleModalCenter").on("show.bs.modal", function(event) {
      var a = $(event.relatedTarget);
      var src = a.data("src");
      var title = a.data("title");
      var modal = $(this);
      modal.find(".modal-title").text(title);
      modal.find(".modal-body img").attr("src", src);
    });
  }
}

export { Gallery, ImageCard, ModalPreview, init };
