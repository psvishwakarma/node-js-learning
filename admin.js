function submitdata(){
  var name=$('#name').val();
  var Add=$('#Add').val();
  var date=$('#date').val();

jsonobject={
  "name":"",
  "Add":"",
  "date":""

}
jsonobject.name=name;
jsonobject.Add=Add;
jsonobject.date=date;
var str =JSON.stringify(jsonobject);}
// document.write(str);

var fs=require('fs');
fs.writeFile("data.json", str, (error) => {
  
  if (error) {
    
    console.error(error);

    throw error;
  }
  document.write(str);
  console.log("data.json written correctly");
});