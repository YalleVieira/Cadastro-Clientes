import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addClient } from "../../store/client/client.action";
import { useDispatch } from "react-redux";
import "./register.css";

const defaultFormValues = {
  name: "",
  email: "",
  contact: "",
  cpf: "",
};

const Register = () => {
  const [formValues, setFormValues] = useState(defaultFormValues),
    dispatch = useDispatch(),
    navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, contact, cpf, email } = formValues;
    if (name === "" || contact === "" || cpf === "" || email === "") {
      alert("Preencha os campos");
      return;
    }
    formValues.id = Math.floor(Math.random() * 100);
    dispatch(addClient(formValues));
    navigate("/");
    alert("Cliente cadastrado!");
  };

  return (
    <div className="register-container">
      <Link className="btn-back" to={"/"}>
        Voltar
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formValues.name}
          onChange={handleChange}
          type="text"
          placeholder="Digite seu nome"
        />
        <input
          name="email"
          onChange={handleChange}
          value={formValues.email}
          type="email"
          placeholder="Digite seu e-mail"
        />
        <input
          name="contact"
          onChange={handleChange}
          value={formValues.contact}
          type="text"
          placeholder="Digite seu telefone (99)9999-9999"
        />
        <input
          name="cpf"
          onChange={handleChange}
          value={formValues.cpf}
          type="text"
          placeholder="Digite seu cpf"
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default Register;
