import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "../../img/500.jpg";

const Cards = () => {
    return (
    <div className="container mt-5">
        <div className="row justify-content-center">
          {/* Primera Carta */}
     
          <div className="   col-12 col-sm-6 col-md-3 mb-4">
            <div className="card shadow">
              <img src={Image} className="card-img-top" alt="Card image" />
              <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
              </div>
            </div>
          </div>

          {/* Segunda Carta */}
          <div className="   col-12 col-sm-6 col-md-3 mb-4">
            <div className="card shadow">
              <img src={Image} className="card-img-top" alt="Card image" />
              <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
              </div>
            </div>
          </div>

          {/* Tercera Carta */}
          <div className="   col-12 col-sm-6 col-md-3 mb-4">
            <div className="card shadow">
              <img src={Image} className="card-img-top" alt="Card image" />
              <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
              </div>
            </div>
          </div>

          
          {/* cuarta Carta */}
          <div className="   col-12 col-sm-6 col-md-3 mb-4">
            <div className="card shadow">
              <img src={Image} className="card-img-top" alt="Card image" />
              <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
              </div>
            </div>
          </div>
          




        </div>
      </div>
    
        
      
      
        
    );
};

export default Cards;

