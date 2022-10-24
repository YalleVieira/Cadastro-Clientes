import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./client.css";

const Client = ({ listClients }) => {
  const clientID = window.location.href.split(":").pop(),
    navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const getClient = () => {
    const clientActual = listClients.filter((client) => {
      if (client.id == clientID) return client;
    });
    return clientActual[0];
  };

  const client = getClient();

  return (
    <div className="client-container">
      <div className="header-client">
        <button className="btn-back" onClick={goBack}>
          Voltar
        </button>
      </div>
      {getClient ? (
        <div className="client-content">
          <h3>Dados do cliente</h3>
          <div className="client-details">
            <p>ID: {client.id}</p>
            <p>Nome: {client.name}</p>
            <p>Contato: {client.contact}</p>
            <p>E-mail: {client.email}</p>
            <p>CPF: {client.cpf}</p>
          </div>
        </div>
      ) : (
        <h3>Ops, não encontramos os dados</h3>
      )}
    </div>
  );
};

const mapStateProps = (store) => ({
  listClients: store.clientReducer.listClients,
});

export default connect(mapStateProps)(Client);
