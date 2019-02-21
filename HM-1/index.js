'use strict'
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const userLogin = prompt ('Введите логин!');

if (userLogin === null){
    alert('отменено пользователем')
} else if (userLogin !== adminLogin){
    alert('Доступ запрещен!');
} else {
    const userPassword = prompt ('введите пароль!')
   if (userPassword === null){
       alert ('отменено пользователем');
   }else if (userPassword !== adminPassword){
       alert ('Доступ запрещен!');
    }else {
        alert('Добро пожаловать');
    }
}
