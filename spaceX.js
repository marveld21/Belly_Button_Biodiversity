d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[1];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});