import { clients } from "../../data";
import { CLIENT_ACTION_TYPES } from "./client.types";

const INITIAL_STATE = {
  listClients: clients,
  selecetedClient: {},
};

export const clientReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLIENT_ACTION_TYPES.SET_CLIENTE_INFO:
      return {
        ...state,
        selecetedClient: action.client,
      };
    case CLIENT_ACTION_TYPES.SET_CLIENTE_ADD:
      return {
        ...state,
        listClients: [...state.listClients, action.payload],
      };
    case CLIENT_ACTION_TYPES.SET_CLIENTE_DEL:
      return {};
    default:
      return state;
  }
};
