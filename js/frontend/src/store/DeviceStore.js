import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor(){
        this._types=[
            {id:1,name:'Холод'},
            {id:2,name:'Смарт'},
            {id:3,name:'Ноут'},
            {id:4,name:'Телевизор'},
        ]

        this._brands=[
            {id:1,name:'Самс'},
            {id:2,name:'Аппл'},
            {id:3,name:'Леново'},
            {id:4,name:'Асус'},
            
        ]

        this._devices=[
            {id:1,name:'iphone 12', price:2500,rating:2},
            {id:2,name:'iphone 13', price:3500,rating:3},
            {id:3,name:'iphone 14', price:4500,rating:4},
            {id:4,name:'iphone 15', price:5500,rating:5},
            {id:5,name:'iphone 16', price:5500,rating:5},
            {id:6,name:'iphone 17', price:5500,rating:5}
        ]
        this._selectedType={}
        this._selectedBrand={}

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

    setSelectedType(type) {
        this._selectedType=type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand=brand;
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

    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}