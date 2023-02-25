export default function validate (inputs){
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors ={}
     if(!inputs.password ) errors.password='Password debe contener entre 6 y 10 caracteres'
     else if(inputs.password.lenght<6) errors.password='Password debe contener entre 6 y 10 caracteres'
     else if(inputs.password.lenght>10) errors.password='Password debe contener entre 6 y 10 caracteres'

     if(!regexEmail.test(inputs.username))errors.username= 'Username debe ser un correo electrónico'
     
     return errors
  }