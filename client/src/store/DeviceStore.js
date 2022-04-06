import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Иконы" },
      { id: 2, name: "Картины" },
      { id: 3, name: "Кортики" },
      { id: 4, name: "Мебель" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 12",
        price: 25000,
        img: "https://alexmak.net/wp-content/uploads/2020/11/IMG_0721-scaled.jpeg",
      },
      {
        id: 2,
        name: "Iphone 12 pro",
        price: 25000,
        img: "https://avatars.mds.yandex.net/get-mpic/5313128/img_id7936210826099769376.png/orig",
      },
    ];
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

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}
