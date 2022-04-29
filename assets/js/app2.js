
  let year = +prompt('Введите номер года');
  
  console.log(`Номер года: ${year}`);

  if( (year % 4 == 0 && year % 100 != 0) || (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) ){
    console.log('Год високосный (366 дней)');
  }else{
    console.log('Год не високосный (365 дней)');
  }
