import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor(){
        this._types=[
            {id:1,name:'Холод'},
            {id:2,name:'Смарт'}
        ]

        this._brands=[
            {id:1,name:'Самс'},
            {id:2,name:'Аппл'}
        ]

        this._devices=[
            {id:1,name:'iphone 12', price:2500,rating:2},
            {id:2,name:'iphone 13', price:3500,rating:3},
            {id:3,name:'iphone 14', price:4500,rating:4},
            {id:4,name:'iphone 15', price:5500,rating:5}
        ]
        
        makeAutoObservable(this);
    }

    setTypes(types){
        this._types=types;
    }

    setBrands(brands){
        this._brands=brands;
    }

    setDevices(devices){
        this._devices=devices;
    }

    get types(){
        return this._types
    }

    get brands(){
        return this._brands
    }

    get devices(){
        return this._devices
    }
}