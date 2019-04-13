'use strict'
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  if( login.length >= 4 && login.length <=16){
    return true 
  } else {
 
    return false
   }
};


const isLoginUnique = function(logins, login) {
  if (logins.includes(login)){
    return false
  } else {
    return true
  }
};


const addLogin = function(logins, login) {
  if (isLoginValid(login)){
      if (isLoginUnique(logins,login)){
          logins.push(login)
          console.log('Логин успешно добавлен!')
       } else{
          console.log('Такой логин уже используется')
        }
       }  else{
       console.log('Ошибка! Логин должен быть от 4 до 16 символов')
   }

};
addLogin(logins,'Ajax'); // 'Логин успешно добавлен!'
