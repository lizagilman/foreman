import Immutable from "seamless-immutable";

import { ADD_DISK_STORGAR_OVIRT } from "./OvirtStorageContainerConstants";

//
const initialState = Immutable({
  volumes: [],
  hello: ""
});

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case ADD_DISK_STORGAR_OVIRT:
      console.log('reducer add disk')
      return state.set(
        "volumes",
        state.volumes.concat({
          ...payload.data,
        })
      );
    default:
      return state;
  }
};
