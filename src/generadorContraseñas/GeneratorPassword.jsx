import React, { useState } from "react";
import "./GeneratorPassword.css";

export default function GeneratorPassword() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [longitud, setLongitud] = useState(0);
  const [password, setPassword] = useState("");

  const handleOnChange1 = () => {
    setCheck1(!check1);
  };
  const handleOnChange2 = () => {
    setCheck2(!check2);
  };
  const handleOnChange3 = () => {
    setCheck3(!check3);
  };

  function longitudPassword(e) {
    setLongitud(e.target.value);
  }

  function generatePassword(e) {
    e.preventDefault()
    let contraseña = "";
    let capitalLetters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let lowercaseLetters = "abcdefghijklmnñopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = ".?,;-_¡!¿*%&$/()[]{}|@><";

    let union = "";

    if (check1) {
      union += capitalLetters;
    } else {
      union += lowercaseLetters;
    }

    if (check2) {
      union += numbers;
    }

    if (check3) {
      union += symbols;
    }

    if (longitud >= 8 && longitud <= 16) {
      for (let i = 0; i < longitud; i++) {
        let generated = Math.floor(Math.random() * union.length);
        contraseña = contraseña + union.charAt(generated);
      }
    } else {
      alert("Error: Longitud permitida entre 8 y 16 caracteres");
    }

    setPassword(contraseña);
  }

  return (
    <div className="container">
      <form className="formulario">
        <input
          type="number"
          placeholder="Ingrese el numero de caracteres ..."
          className="entrada"
          longitud={longitud}
          onChange={longitudPassword}
        />
        <div className="checks">
          <label>Mayusculas</label>
          <input
            type="checkbox"
            className="palomas1"
            check1={check1.toString()}
            onChange={handleOnChange1}
          />
          <label>Numeros</label>
          <input
            type="checkbox"
            className="palomas2"
            check2={check2.toString()}
            onChange={handleOnChange2}
          />
          <label>Caracteres especiales</label>
          <input
            type="checkbox"
            className="palomas3"
            check3={check3.toString()}
            onChange={handleOnChange3}
          />
        </div>
        <div className="btn-container">
          <button
            type="onSubmit"
            className="button-29"
            onClick={generatePassword}
          >
            Generar Contraseña
          </button>
        </div>
        <div className="contenidoPassword">
          <h5 className="text">Su contraseña generada es: </h5>
          <span className="pass">{password}</span>
        </div>
      </form>
    </div>
  );
}
