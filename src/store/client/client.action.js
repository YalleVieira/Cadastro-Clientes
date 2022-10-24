import { CLIENT_ACTION_TYPES } from "./client.types";

export const addClient = (client) => {
  return {
    type: CLIENT_ACTION_TYPES.SET_CLIENTE_ADD,
    payload: client,
  };
};

export function infoClient(client) {
  return {
    type: CLIENT_ACTION_TYPES.SET_CLIENTE_INFO,
    payload: {
      client,
    },
  };
}

export function removeClient(client) {
  return {
    type: CLIENT_ACTION_TYPES.SET_CLIENTE_DEL,
    payload: client,
  };
}
