import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = {};
    this._selectedBrand = {};
    //new for device
    this._selectedDevice = {};

    // this._page=1;
    // this._totalCount=0;
    // this._limit=3;    


    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  setSelectedDevice(device) {
    this._selectedDevice = device;
  }

  // setPage(page) {
  //   this._page = page;
  // }

  //new for device
  // setTotlaCount(count) {
  //   this._totalCount = count;
  // }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
  //new for device
  get selectedDevice() {
    return this._selectedDevice;
  }


  // get totalCount() {
  //   return this._totalCount;
  // }
  // get page() {
  //   return this._page;
  // }
  // get limit() {
  //   return this._limit;
  // }
}
