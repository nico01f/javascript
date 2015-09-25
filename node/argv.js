resulArgv = 0; //Almacena resultado 

for (ite = 2; ite < process.argv.length; ite++){ //Inicia iteración desde el tercer elemento
  resulArgv += Number(process.argv[ite]); //Suma todos los elementos entregados por el argumento
};
console.log(resulArgv);
