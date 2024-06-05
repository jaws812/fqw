import { action, makeAutoObservable, observable } from "mobx";

export default class CartStore {
  idCart = "";

  constructor() {
    makeAutoObservable(this, {
      idCart: observable,
      setIdCart: action,
    });
  }

  setIdCart(id) {
    this.idCart = id;
  }
}
