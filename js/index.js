$( document ).ready(function(){
// Browser build in geolocation
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {

    // request api
    $.getJSON("https://api.apixu.com/v1/current.json?key=process.env.APIKEY"+ position.coords.latitude+","+position.coords.longitude, function(json){

  $("#cidade").html(json.location.name+" " +json.location.region);
  $("#temp").html(json.current.temp_c+"<span style='color:blue;'>°C</span>");
  $("#icone").html(json.current.condition.icon);
  document.getElementById('icone').setAttribute("src", json.current.condition.icon);
  $("#test").html(JSON.stringify(json));
//   CHange from celsius to fah
      var a = 1;
  $("#temp").on("click", function(){
    if (a==1){

      $("#temp").html(json.current.temp_f+"<span style='color:red;'>°F</span>");
      a=2;
    } else if (a==2){
    $("#temp").html(json.current.temp_c+"<span style='color:blue;'>°C</span>");
      a=1;
      }

  });
      });



  });
}
  });
