export default class item {
    constructor(id, name, price, imgSrc) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imgSrc = imgSrc;
    }

    show(){
        return `id=${this.id} name=${this.name}`;
    }
}