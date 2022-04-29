
  let mass = +prompt('Масса (кг)');

  console.log(`Масса ${mass} кг.`);

  let height = +prompt(`Рост: (м)`);

  console.log(`Рост ${height} м.`);

  let index = mass / (height ** 2);

  console.log(`Индекс ${index}`);

  if(index <= 16){
    alert('Выраженный дефицит массы тела');
    console.log('Выраженный дефицит массы тела');
  }else if( (index > 16) && (index < 18.5) ){
    alert('Недостаточная (дефицит) масса тела');
    console.log('Недостаточная (дефицит) масса тела');
  }else if( (index >= 18.5) && (index < 25) ){
    alert('Норма');
    console.log('Норма');
  }else if( (index >= 25) && (index < 30) ){
    alert('Избыточная масса тела (предожирение)');
    console.log('Избыточная масса тела (предожирение)');
  }else if( (index >= 30) && (index < 35) ){
    alert('Ожирение 1 степени');
    console.log('Ожирение 1 степени');
  }else if( (index >= 35) && (index < 40) ){
    alert('Ожирение 2 степени');
    console.log('Ожирение 2 степени');
  }else if(index >= 40){
    alert('Ожирение 3 степени');
    console.log('Ожирение 3 степени');
  }