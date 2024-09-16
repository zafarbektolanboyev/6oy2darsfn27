import React from "react";
import "./index.css";
import data from "../../assets/data.json";

function User() {
  return (
    <div className="user">
      {data.length &&
        data.map((el, index) => {
          return (
            <div key={index} className="cart">
              <img className="el-img" src={el.image} alt="image" />
              
              <div className="text">
              <h2>Name:{el.firstName + " " + el.lastName}</h2>
                <span className="address">
                  <p>Phone:{el.phone}</p>
                  <p>Email:{el.email}</p>
                </span>
                <br />
                <span className="location">
                  <p>Region:{el.address.region}</p>
                  <p>Addres:{el.address.zip}</p>
                </span>
                <span className="cars">
                  {!el.cars.length ? (
                    <p className="car">Car:😢😢😢</p>
                  ) : (
                    <p className="car">Car:{el.cars.join(",   ")}</p>
                  )}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default User;
