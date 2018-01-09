var convert = function(rawDate,setRes){
  var obj = {"unix":'',"natural":''}
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  if(rawDate == parseInt(rawDate))
  {
    
    
    var jsTs = rawDate * 1000;
    var newDate = new Date(jsTs);
    
    
    var month = months[newDate.getUTCMonth()];
    var day = newDate.getUTCDate();
    var year = newDate.getUTCFullYear();
    
    var naturalDate = month + ' ' + day + ', ' + year;
    
    obj.unix = jsTs /1000;
    obj.natural = naturalDate;
    
  }
  else
  {
   var d = new Date(rawDate)
   
      if(isNaN(d)) {
        obj.unix = 'null';
        obj.natural ='null'; 
      }
      else {
         var month = months[d.getUTCMonth()];
         var day = d.getUTCDate();
         var year = d.getUTCFullYear();

         var naturalDate = month + ' ' + day + ', ' + year;
         obj.unix = d.getTime() /1000;;
         obj.natural = naturalDate;   
      }
    
    
  }
  
setRes(obj);
}




module.exports = convert;