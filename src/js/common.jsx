import doc from "./doc";

class ProductCard {
    constructor(prodid) {
        this.productId = prodid;
    }
    open(prodid) {
        doc.id('prod-desc').style.display = 'flex';
    }
    close() {
        document.getElementById('prod-desc').getElementsByClassName('box')[0].style.bottom
        setTimeout(() => doc.id('prod-desc').style.display = 'none', 0)

    }
}

let productcard = new ProductCard();

export default productcard