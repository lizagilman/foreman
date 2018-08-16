
import {ADD_DISK_STORGAR_OVIRT, REMOVE_DISK_STORAGE_OVIRT, UPDATE_DISK_STORAGE_OVIRT} from "./OvirtStorageContainerConstants";


export const addDisk = () => ({
  type: ADD_DISK_STORGAR_OVIRT,
});


export const removeDisk = key => ({
  type: REMOVE_DISK_STORAGE_OVIRT,
  payload: key,
});


export const updateStorage = (key, data) => ({
  type: UPDATE_DISK_STORAGE_OVIRT,
  payload: { key: key, storageData:  data }
});

