import React, { Component } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

class Form extends Component {
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
        <li className="breadcrumb-item active" aria-current="page">Forms</li>
      </ol>
    </nav>
    <section className="forms">
      <div className="card card_border py-2 mb-4">
        <div className="cards__heading">
          <h3>Forms <span /></h3>
        </div>
        <div className="card-body">
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="input__label">Email address</label>
              <input type="email" className="form-control input-style" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="input__label">Password</label>
              <input type="password" className="form-control input-style" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-check check-remember check-me-out">
              <input type="checkbox" className="form-check-input checkbox" id="exampleCheck1" />
              <label className="form-check-label checkmark" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary btn-style mt-4">Submit</button>
          </form>
        </div>
      </div>
      <div className="card card_border py-2 mb-4">
        <div className="card-body">
          <form action="#" method="post">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4" className="input__label">Email</label>
                <input type="email" className="form-control input-style" id="inputEmail4" placeholder="Email" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4" className="input__label">Password</label>
                <input type="password" className="form-control input-style" id="inputPassword4" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress" className="input__label">Address</label>
              <input type="text" className="form-control input-style" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2" className="input__label">Address 2</label>
              <input type="text" className="form-control input-style" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity" className="input__label">City</label>
                <input type="text" className="form-control input-style" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState" className="input__label">State</label>
                <select id="inputState" className="form-control input-style">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip" className="input__label">Zip</label>
                <input type="text" className="form-control input-style" id="inputZip" />
              </div>
            </div>
            <div className="form-check check-remember check-me-out">
              <input className="form-check-input checkbox" type="checkbox" id="gridCheck" />
              <label className="form-check-label checkmark" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-style mt-4">Sign in</button>
          </form>
        </div>
      </div>
      <div className="card card_border py-2 mb-4">
        <div className="cards__heading">
          <h3>Horizontal Forms <span /></h3>
        </div>
        <div className="card-body">
          <form action="#" method="post">
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label input__label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control input-style" id="inputEmail3" placeholder="Email" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label input__label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control input-style" id="inputPassword3" placeholder="Password" />
              </div>
            </div>
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0 input__label">Radios</legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      First radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Second radio
                    </label>
                  </div>
                  <div className="form-check disabled">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" defaultValue="option3" disabled />
                    <label className="form-check-label" htmlFor="gridRadios3">
                      Third disabled radio
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="form-group row">
              <div className="col-sm-2">Checkbox</div>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck1" />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    Example checkbox
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary btn-style">Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card card_border py-2 mb-4">
        <div className="cards__heading">
          <h3>Suppported elements <span /></h3>
        </div>
        <div className="card-body">
          <form className="was-validated">
            <div className="custom-control custom-checkbox mb-3">
              <input type="checkbox" className="custom-control-input" id="customControlValidation1" required />
              <label className="custom-control-label" htmlFor="customControlValidation1">Check this custom
                checkbox</label>
              <div className="invalid-feedback">Example invalid feedback text</div>
            </div>
            <div className="custom-control custom-radio">
              <input type="radio" className="custom-control-input" id="customControlValidation2" name="radio-stacked" required />
              <label className="custom-control-label" htmlFor="customControlValidation2">Toggle this custom
                radio</label>
            </div>
            <div className="custom-control custom-radio mb-3">
              <input type="radio" className="custom-control-input" id="customControlValidation3" name="radio-stacked" required />
              <label className="custom-control-label" htmlFor="customControlValidation3">Or toggle this other
                custom radio</label>
              <div className="invalid-feedback">More example invalid feedback text</div>
            </div>
            <div className="form-group">
              <select className="custom-select input-style" required>
                <option value>Open this select menu</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
              <div className="invalid-feedback">Example invalid custom select feedback</div>
            </div>
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="validatedCustomFile" required />
              <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
              <div className="invalid-feedback">Example invalid custom file feedback</div>
            </div>
          </form>
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


  export default Form;