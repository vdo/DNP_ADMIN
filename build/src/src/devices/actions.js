// DEVICES
import * as t from "./actionTypes";

export const addDevice = id => ({
  type: t.CALL,
  method: "addDevice",
  message: `Adding ${id}...`,
  kwargs: { id }
});

export const removeDevice = id => ({
  type: t.CALL,
  method: "removeDevice",
  message: `Removing ${id}...`,
  kwargs: { id }
});

export const toggleAdmin = id => ({
  type: t.CALL,
  method: "toggleAdmin",
  message: `Toggling ${id} admin credentials...`,
  kwargs: { id }
});

export const toggleGuestUsers = () => ({
  type: t.CALL,
  method: "toggleGuestUsers",
  message: `Toggling guest users...`,
  kwargs: {}
});

export const resetGuestUsersPassword = () => ({
  type: t.CALL,
  method: "resetGuestUsersPassword",
  message: `Reseting guest user's password...`,
  kwargs: {}
});

export const fetchDevices = id => ({
  type: t.FETCH_DEVICES,
  id
});
