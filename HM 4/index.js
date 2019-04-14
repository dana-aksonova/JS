'use strict'
const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
  };

  function Cashier (name, productDatabase){
      this.name = name;
      this.productDatabase = productDatabase;
      this.customerMoney = 0;
      this.totalPrice = 0;
      this.getCustomerMoney = function(value){
          this.customerMoney = value
      }
      this.countTotalPrice = function(order){
          const keys = Object.keys(order)
          const price = keys.reduce( (acc,val) => {
                 return acc + order[val]* productDatabase[val]
             },0)
        this.totalPrice  = price;
        return price;   
      }
      this.countChange = function(){
          if (this.totalPrice>this.customerMoney){
              return null
          }else{
              return this.customerMoney -this.totalPrice;
          }
      }
      this.onSuccess =function(change){
          console.log(`Спасибо за покупку, ваша сдачв ${change}`);
      }
      this.onError = function(){
          console.log('Очень жаль,Вам не хватает денег для покупки')
      }
      this.reset = function(){
          this.customerMoney = 0;
      }
  }

  
  const mango = new Cashier('Mango', products);
  console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
  };
  const totalPrice = mango.countTotalPrice(order);
  console.log(totalPrice); // 110
 
  mango.getCustomerMoney(300);

// Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
const change = mango.countChange();

// Проверяем что нам вернул countChange
console.log(change); // 190

// Проверяем результат подсчета денег
if(change !== null) {
   // При успешном обслуживании вызываем метод onSuccess
  mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
  // При неудачном обслуживании вызываем метод onError   
  mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения после reset
console.log(mango.customerMoney); // 0