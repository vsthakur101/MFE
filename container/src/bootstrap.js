import { mountProduct } from 'products/ProductsIndex';
import { mountCart } from 'cart/CartShow'

mountProduct(document.querySelector('#root'));
mountCart(document.querySelector('#dev-cart'));