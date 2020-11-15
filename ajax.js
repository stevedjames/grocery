
$(document).ready(function(){
  $.getJSON("grocery.json",function(data){
    var grocery_data="";
    $.each(data,function(key,value){
      grocery_data+='<tr>';
      grocery_data+="<td>"+value.slno+"</td>";
      grocery_data+="<td>"+value.dept+"</td>";
      grocery_data+="<td>"+value.item+"</td>";
      grocery_data+="<td>"+value.qty+"</td>";
      grocery_data+="<td>"+value.unit+"</td>";
      grocery_data+="<td>"+value.notes+"</td>";
      grocery_data+="<td>"+"<input type='checkbox' class='chk'>"+"</td>"
   
    });
    $("#grocery_table").append(grocery_data);
   
 });
});
