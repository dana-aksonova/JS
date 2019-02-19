'use strict'
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  if( login.length >= 4 && login.length <=16){
    return true 
  }else
  // alert ('Ошибка! Логин должен быть от 4 до 16 символов')
return false
  
};
isLoginValid('Ajax'); 

const isLoginUnique = function(logins, login) {
  if (logins.includes(login)){
    // alert ('Такой логин уже используется')
    return false
  } else
  return true
};


const addLogin = function(logins, login) {
  if (isLoginValid(login)){
      if (isLoginUnique(logins,login)){
          loogins.push(login)
          console.log('Логин успешно добавлен!')
       } else{
          console.log('Такой логин уже используется')
        }
      } else{
       console.log('Ошибка! Логин должен быть от 4 до 16 символов')
   }

};
addLogin('Ajax'); // 'Логин успешно добавлен!'
