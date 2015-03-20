var calculation = function(){
  date = new Date();
  time = date.getTime();
  console.log('yup '+time);
}
setInterval(calculation, 1000);
