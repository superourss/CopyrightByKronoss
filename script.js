function acheter(produit, prix) {
    const url = `https://paypal.me/superours120/${prix}`;
    window.location.href = url;
}
