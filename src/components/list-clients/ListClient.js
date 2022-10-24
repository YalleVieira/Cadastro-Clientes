import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { infoClient } from "../../store/client/client.action";
import { BsSearch } from "react-icons/bs";
import "./style.css";

const ListClient = ({ listClients, selectClient }) => {
  return (
    <div className="listClients">
      {listClients ? (
        <table className="content-table">
          <thead>
            <tr>
              <td>Nome</td>
              <td>Email</td>
              <td>Número</td>
            </tr>
          </thead>
          <tbody>
            {listClients &&
              listClients.map((client) => {
                return (
                  <tr key={client.id}>
                    <td className="content-name">
                      <Link to={`/client:${client.id}`}>
                        <BsSearch
                          className="btn-icon"
                          onClick={() => selectClient(client)}
                        />
                      </Link>
                      {client.name}
                    </td>
                    <td>{client.email}</td>
                    <td>{client.contact}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <h3>Não há clientes</h3>
      )}
    </div>
  );
};

const mapStateProps = (store) => ({
  listClients: store.clientReducer.listClients,
});

const mapDispatchToProps = (dispatch) => ({
  selectClient: (client) => dispatch(infoClient(client)),
});

export default connect(mapStateProps, mapDispatchToProps)(ListClient);
