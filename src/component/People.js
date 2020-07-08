import React, { Component } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

class People extends Component {
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
        <li className="breadcrumb-item active" aria-current="page">People Cards</li>
      </ol>
    </nav>
    <section className="people">
      <section className="w3l-team-block">
        <div className="card card_border mb-5">
          <div className="cards__heading">
            <h3>People Cards -<span> Version 1</span></h3>
          </div>
          <div className="card-body">
            <div className="teams mb-4">
              <div className="row px-2">
                <div className="col-lg-3 col-md-6 mb-lg-0 mb-4 px-2">
                  <div className="item">
                    <div className="d-team-grid team-info">
                      <div className="column">
                        <a href="team-single.html"><img src="assets/images/team.jpg" alt="" /></a>
                      </div>
                      <div className="team-member">
                        <h3 className="name-pos mb-0"><a href="team-single.html">Anthony</a></h3>
                        <p>Project Manager</p>
                        <div className="social">
                          <a href="#facebook" className="team-facebook"><span className="fa fa-facebook" aria-hidden="true" /></a>
                          <a href="#twitter" className="team-twitter"><span className="fa fa-twitter" aria-hidden="true" /></a>
                          <a href="#instagram" className="team-instagram"><span className="fa fa-instagram" aria-hidden="true" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-lg-0 mb-4 px-2">
                  <div className="item">
                    <div className="d-team-grid team-info">
                      <div className="column">
                        <a href="team-single.html"><img src="assets/images/team2.jpg" alt="" /></a>
                      </div>
                      <div className="team-member">
                        <h3 className="name-pos mb-0"><a href="team-single.html">Dennis Jack</a>
                        </h3>
                        <p>Team Lead</p>
                        <div className="social">
                          <a href="#facebook" className="team-facebook"><span className="fa fa-facebook" aria-hidden="true" /></a>
                          <a href="#twitter" className="team-twitter"><span className="fa fa-twitter" aria-hidden="true" /></a>
                          <a href="#instagram" className="team-instagram"><span className="fa fa-instagram" aria-hidden="true" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-lg-0 mb-4 px-2">
                  <div className="item">
                    <div className="d-team-grid team-info">
                      <div className="column">
                        <a href="team-single.html"><img src="assets/images/team3.jpg" alt="" /></a>
                      </div>
                      <div className="team-member">
                        <h3 className="name-pos mb-0"><a href="team-single.html">Harold</a></h3>
                        <p>Developer</p>
                        <div className="social">
                          <a href="#facebook" className="team-facebook"><span className="fa fa-facebook" aria-hidden="true" /></a>
                          <a href="#twitter" className="team-twitter"><span className="fa fa-twitter" aria-hidden="true" /></a>
                          <a href="#instagram" className="team-instagram"><span className="fa fa-instagram" aria-hidden="true" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-0 px-2">
                  <div className="item">
                    <div className="d-team-grid team-info">
                      <div className="column">
                        <a href="team-single.html"><img src="assets/images/team4.jpg" alt="" /></a>
                      </div>
                      <div className="team-member">
                        <h3 className="name-pos mb-0"><a href="team-single.html">Lawrence</a></h3>
                        <p>Designer</p>
                        <div className="social">
                          <a href="#facebook" className="team-facebook"><span className="fa fa-facebook" aria-hidden="true" /></a>
                          <a href="#twitter" className="team-twitter"><span className="fa fa-twitter" aria-hidden="true" /></a>
                          <a href="#instagram" className="team-instagram"><span className="fa fa-instagram" aria-hidden="true" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="card card_border mb-5">
        <div className="cards__heading">
          <h3>People Cards -<span> Version 2</span></h3>
        </div>
        <div className="card-body">
          <div className="row px-2">
            <div className="col-lg-3 col-md-6 mb-4 px-2">
              <div className="card text-center card_border py-2">
                <div className="card-body">
                  <div className="team-main-19">
                    <a href="#url"><img className="rounded-circle" src="assets/images/people1.jpg" alt=" " /></a>
                    <div className="right-team-9">
                      <div>
                        <h5><a href="#url" className="card__title mb-2 mt-3">Alexander smith</a>
                        </h5>
                        <p className>Web designer</p>
                      </div>
                      <div className="people-social mt-3">
                        <a href="#team" className="facebook"><span className="fa fa-facebook" /></a>
                        <a href="#team" className="twitter"><span className="fa fa-twitter" /></a>
                        <a href="#team" className="linkedin"><span className="fa fa-linkedin" /></a>
                      </div>
                      <a href="#url" className="btn mt-4 profile-btn text-primary">View profile </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 px-2">
              <div className="card text-center card_border py-2">
                <div className="card-body">
                  <div className="team-main-19">
                    <a href="#url"><img className="rounded-circle" src="assets/images/people2.jpg" alt=" " /></a>
                    <div className="right-team-9">
                      <div>
                        <h5><a href="#url" className="card__title mb-2 mt-3">Elizabeth lisa</a>
                        </h5>
                        <p className>Web designer</p>
                      </div>
                      <div className="people-social mt-3">
                        <a href="#team" className="facebook"><span className="fa fa-facebook" /></a>
                        <a href="#team" className="twitter"><span className="fa fa-twitter" /></a>
                        <a href="#team" className="linkedin"><span className="fa fa-linkedin" /></a>
                      </div>
                      <a href="#url" className="btn mt-4 profile-btn text-primary">View profile </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 px-2">
              <div className="card text-center card_border py-2">
                <div className="card-body">
                  <div className="team-main-19">
                    <a href="#url"><img className="rounded-circle" src="assets/images/people3.jpg" alt=" " /></a>
                    <div className="right-team-9">
                      <div>
                        <h5><a href="#url" className="card__title mb-2 mt-3">Michael watson</a>
                        </h5>
                        <p className>Web designer</p>
                      </div>
                      <div className="people-social mt-3">
                        <a href="#team" className="facebook"><span className="fa fa-facebook" /></a>
                        <a href="#team" className="twitter"><span className="fa fa-twitter" /></a>
                        <a href="#team" className="linkedin"><span className="fa fa-linkedin" /></a>
                      </div>
                      <a href="#url" className="btn mt-4 profile-btn text-primary">View profile </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 px-2">
              <div className="card text-center card_border py-2">
                <div className="card-body">
                  <div className="team-main-19">
                    <a href="#url"><img className="rounded-circle" src="assets/images/people4.jpg" alt=" " /></a>
                    <div className="right-team-9">
                      <div>
                        <h5><a href="#url" className="card__title mb-2 mt-3">Johnson Ker</a>
                        </h5>
                        <p className>Web designer</p>
                      </div>
                      <div className="people-social mt-3">
                        <a href="#team" className="facebook"><span className="fa fa-facebook" /></a>
                        <a href="#team" className="twitter"><span className="fa fa-twitter" /></a>
                        <a href="#team" className="linkedin"><span className="fa fa-linkedin" /></a>
                      </div>
                      <a href="#url" className="btn mt-4 profile-btn text-primary">View profile </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </div>
  <Footer/>
</div>


        );
      }
    }

export default People;
