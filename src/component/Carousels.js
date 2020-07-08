import React, { Component } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

class Carousels extends Component {
    render() {
        return (
            <div>
            <Sidebar />
            <Header />
<div className="main-content">
  <div className="container-fluid content-top-gap">
    <nav aria-label="breadcrumb" className="mb-4">
      <ol className="breadcrumb my-breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Elements</a></li>
        <li className="breadcrumb-item active" aria-current="page">Carousels</li>
      </ol>
    </nav>
    <div className="row">
      <div className="col-lg-6">
        <div className="p-3 card card_border">
          <div className="pl-0 pt-0 card-header chart-grid__header">
            Slides only
          </div>
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="assets/images/cart.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="assets/images/template2.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="assets/images/dashboard.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-lg-0 mt-5">
        <div className="p-3 card card_border">
          <div className="pl-0 pt-0 card-header chart-grid__header">
            With controls
          </div>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="assets/images/template2.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="assets/images/dashboard.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="assets/images/cart.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 mt-5">
        <div className="p-3 card card_border">
          <div className="pl-0 pt-0 card-header chart-grid__header">
            With indicators
          </div>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="assets/images/dashboard.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="assets/images/cart.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="assets/images/template2.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-5">
        <div className="p-3 card card_border">
          <div className="pl-0 pt-0 card-header chart-grid__header">
            With caption
          </div>
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleCaptions" data-slide-to={1} />
              <li data-target="#carouselExampleCaptions" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active layer">
                <img src="assets/images/cart.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
              <div className="carousel-item layer">
                <img src="assets/images/template2.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="carousel-item layer">
                <img src="assets/images/dashboard.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>
        );
      }
    }

export default Carousels;
