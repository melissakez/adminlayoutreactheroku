import React, { Component } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

class Contblock extends Component {
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
        <li className="breadcrumb-item active" aria-current="page">Content Blocks</li>
      </ol>
    </nav>
    <div className="cards__heading">
      <h3>Content Blocks</h3>
    </div>
    <div className="card card_border p-lg-5 p-3 mb-4">
      <div className="card-body py-3 p-0">
        <div className="row">
          <div className="col-lg-6 align-self pr-lg-4">
            <h3 className="block__title mb-lg-4">About Content Block</h3>
            <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
              neque sunt labore veritatis. </p>
            <p className="mb-lg-5 mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
              neque sunt
              praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
              praesentium vel voluptatum quasi dolor explicabo nobis ex?</p>
            <a href="#read" className="btn btn-style btn-primary"> Read More</a>
          </div>
          <div className="col-lg-6 pl-lg-4 mt-lg-0 mt-4">
            <img src="assets/images/template2.jpg" alt="" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
    <div className="card card_border p-lg-5 p-3 mb-4">
      <div className="card-body py-3 p-0">
        <div className="row">
          <div className="col-lg-6 pr-lg-4">
            <img src="assets/images/template1.jpg" alt="" className="img-fluid rounded" />
          </div>
          <div className="col-lg-6 align-self pl-lg-4 mt-lg-0 mt-4">
            <h3 className="block__title mb-lg-4">Content Block with 2 buttons</h3>
            <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti neque sunt
              praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
              praesentium vel voluptatum quasi dolor explicabo nobis ex?</p>
            <p className="mb-lg-5 mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
              neque sunt labore veritatis.</p>
            <a href="#read" className="btn btn-style btn-primary mr-2"> Read More</a>
            <a href="#more" className="btn btn-style border-btn"> Contact Us</a>
          </div>
        </div>
      </div>
    </div>
    <div className="card card_border p-lg-5 p-3 mb-4">
      <div className="card-body py-3 p-0">
        <div className="row">
          <div className="col-lg-6 align-self pr-lg-4">
            <h3 className="block__title mb-lg-4">Content Block with list features</h3>
            <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
              neque sunt aut, labore veritatis. </p>
            <ul className="block-list">
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
              <li>Accusa ntium corrupti neque sunt praesentium aut, labore veritatis accusa ntium nobis ex.</li>
              <li>Eaque, similique aspernatur. Perferendis doloremque ut </li>
              <li>praesentium vel voluptatum quasi dolor explicabo nobis ex?</li>
              <li>Lorem ipsum dolor sit amet, adipisicing elit.</li>
            </ul>
          </div>
          <div className="col-lg-6 pl-lg-4 mt-lg-0 mt-4">
            <img src="assets/images/dashboard.jpg" alt="" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
    <div className="card card_border p-lg-5 p-3 mb-4">
      <div className="card-body py-3 p-0">
        <h3 className="block__title mb-lg-4">Content Block Grids</h3>
        <div className="row">
          <div className="col-md-4 column mt-md-3 mt-3">
            <a href="#img1"><img className="img-fluid rounded" src="assets/images/template2.jpg" alt="" /></a>
            <a href="#para1">
              <p className="grid-para">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </a>
            <a href="#caption1">
              <p className="paragraph text-primary">caption</p>
            </a>
          </div>
          <div className="col-md-4 column mt-md-3 mt-5">
            <a href="#img1"><img className="img-fluid rounded" src="assets/images/cart.jpg" alt="" /></a>
            <a href="#para2">
              <p className="grid-para">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </a>
            <a href="#caption2">
              <p className="paragraph text-primary">caption</p>
            </a>
          </div>
          <div className="col-md-4 column mt-md-3 mt-5">
            <a href="#img1"><img className="img-fluid rounded" src="assets/images/dashboard.jpg" alt="" /></a>
            <a href="#para3">
              <p className="grid-para">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </a>
            <a href="#caption3">
              <p className="paragraph text-primary">caption</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="card card_border p-lg-5 p-3 mb-4">
      <div className="card-body py-3 p-0">
        <h3 className="block__title mb-lg-4">Content Block Features with photo</h3>
        <div className="row cwp23-content align-items-lg-center">
          <div className="cwp23-img col-md-6 pt-md-4 mt-md-0 mt-3">
            <img src="assets/images/content.jpg" className="img-fluid rounded" alt="" />
          </div>
          <div className="cwp23-text col-md-6 mt-4 mt-md-0 pl-md-4">
            <div className="cwp23-title">
              <h3>Features with photo, you are in a good company </h3>
            </div>
            <div className="row cwp23-text-cols">
              <div className="column col-lg-6 mt-4">
                <h4 className="text-primary">Feature One</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </p>
              </div>
              <div className="column col-lg-6 mt-4">
                <h4 className="text-primary">Feature Two</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </p>
              </div>
              <div className="column col-lg-6 mt-4">
                <h4 className="text-primary">Feature Three</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </p>
              </div>
              <div className="column col-lg-6 mt-4">
                <h4 className="text-primary">Feature Four</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card card_border p-lg-5 p-3 mb-4">
      <div className="card-body py-3 p-0">
        <h3 className="block__title mb-lg-4">Content Block Features</h3>
        <div className="row feature-3 text-center">
          <div className="col-md-4 three-grids-columns mt-5">
            <span className="fa fa-laptop icon-fea" aria-hidden="true" />
            <a href="#">
              <h4>Web Design</h4>
            </a>
            <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
            <a href="#" className="actionbg">Read More</a>
          </div>
          <div className="col-md-4 three-grids-columns mt-5">
            <span className="fa fa-paint-brush icon-fea" aria-hidden="true" />
            <a href="#">
              <h4>Graphic Design</h4>
            </a>
            <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
            <a href="#" className="actionbg">Read More</a>
          </div>
          <div className="col-md-4 three-grids-columns mt-5">
            <span className="fa fa-signal icon-fea" aria-hidden="true" />
            <a href="#">
              <h4>Web Development</h4>
            </a>
            <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
            <a href="#" className="actionbg">Read More</a>
          </div>
        </div>
      </div>
    </div>
    <div className="w3l-about1 card card_border p-lg-5 p-3 mb-4">
      <div className="card-body py-3 p-0">
        <h3 className="block__title mb-lg-4">Content Block Features with photo</h3>
        <div className="row cwp23-content">
          <div className="col-md-6 cwp23-text">
            <div className="row cwp23-text-cols">
              <div className="col-md-6 column mt-4">
                <span className="fa fa-laptop icon-fea" aria-hidden="true" />
                <a href="#url">Web design</a>
                <p>Type your text here... Lorem ipsum dolor sit amet. </p>
              </div>
              <div className="col-md-6 column mt-4">
                <span className="fa fa-paint-brush icon-fea" aria-hidden="true" />
                <a href="#url">Graphic design</a>
                <p>Type your text here... Lorem ipsum dolor sit amet. </p>
              </div>
              <div className="col-md-6 column mt-4">
                <span className="fa fa-signal icon-fea" aria-hidden="true" />
                <a href="#url">Web development</a>
                <p>Type your text here... Lorem ipsum dolor sit amet. </p>
              </div>
              <div className="col-md-6 column mt-4">
                <span className="fa fa-laptop icon-fea" aria-hidden="true" />
                <a href="#url">Webdesign</a>
                <p>Type your text here... Lorem ipsum dolor sit amet. </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-md-0 mt-5 cwp23-img">
            <img src="assets/images/template2.jpg" className="img-fluid rounded" alt="" />
             </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    <Footer />
</div>
      );
    }
  }


  export default Contblock;