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
      { id: 1, name: "Да Винчи" },
      { id: 2, name: "Феофан Грек" },
      { id: 3, name: "Rfnz" },
      { id: 4, name: "миша" },
      { id: 5, name: "Виктор" },
      { id: 6, name: "Андрей" },
      { id: 7, name: "Сергей" },
      { id: 8, name: "Антон" },
      { id: 9, name: "Леха" },
      { id: 10, name: "Санич" },
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
      {
        id: 3,
        name: "Iphone 12 pro3",
        price: 25000,
        img: "https://avatars.mds.yandex.net/get-mpic/5313128/img_id7936210826099769376.png/orig",
      },
      {
        id: 4,
        name: "Iphone 12 pro4",
        price: 25000,
        img: "https://avatars.mds.yandex.net/get-mpic/5313128/img_id7936210826099769376.png/orig",
      },
      {
        id: 5,
        name: "Iphone 12 pro5",
        price: 25000,
        img: "https://avatars.mds.yandex.net/get-mpic/5313128/img_id7936210826099769376.png/orig",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }
  // Actions
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

  // Getters
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get seletcedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
