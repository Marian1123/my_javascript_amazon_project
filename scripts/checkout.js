import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProductsFetch} from '../data/products.js'
import {cart} from '../data/cart-class.js'



async function loadPage() {
  try {
    
    await Promise.all([
       loadProductsFetch(),
      ]).then(() => {
      renderOrderSummary();
      renderPaymentSummary();
    })

  } catch {
    console.log('unexpected error. please try again later')
  }

}

loadPage()


export function updateCartQuantity() {
  const cartQuantity = cart.calculateCartQuantity();

  document.querySelector('.js-return-to-home-link')
    .innerHTML = `${cartQuantity} items`;
}

updateCartQuantity()
