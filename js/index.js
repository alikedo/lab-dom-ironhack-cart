function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const subtotalPrice = Number(price.innerText) * Number(quantity.value);
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {
  // ITERATION 2 + 3
  const productsAllCollection = document.getElementsByClassName('product');
  const productsAll = [...productsAllCollection];
  let totalPrice = 0;

  productsAll.forEach((product) => {
    updateSubtotal(product);
    totalPrice += updateSubtotal(product);
  });

  document.querySelector('#total-value span').innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  // table row .product > td .action > button .btn-remove
  const productRowToRemove = target.parentNode.parentNode;
  productRowToRemove.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
  // 1. data from new product input
  const newProductRowInput = document.querySelector('.create-product');
  const newProductNameInput = newProductRowInput.querySelector('input').value;
  const newProductPriceInput = Number(newProductRowInput.querySelector('input[type = "number"]').value);

  // 2. duplicating existing product row and the end of tablebody
  const productRow = document.querySelector('.product');
  const createNewProductRow = productRow.cloneNode(true);
  document.querySelector('#cart tbody').appendChild(createNewProductRow);

  // 3. outputting collected data from 1. to newly created row from 2.
  createNewProductRow.querySelector('.name span').innerText = newProductNameInput;
  createNewProductRow.querySelector('.price span').innerText = newProductPriceInput;

  // 4. adding functionality to .btn-remove
  createNewProductRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

  // 5. resetting values in input fields for new product
  newProductRowInput.querySelector('input').value = '';
  newProductRowInput.querySelector('input[type = "number"]').value = 0;
}