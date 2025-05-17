import { renderPaymentSummary } from '../checkout/paymentSummary.js';
import { renderOrderSummary } from '../checkout/orderSummary.js';
import { loadProductsFetch } from '../data/products.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

loadProductsFetch().then((values)=>{
  renderOrderSummary();
  renderPaymentSummary();
})

/*
loadProducts(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});
*/
