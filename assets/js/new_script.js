//$.post("https://api.yelp.com/oauth2/token",{
//  grant_type: "client_credentials",
 // client_id: "l_OltA5Ew4ICDizscxfjeg",
 // client_secret: "yfDHBhk1vmpuW5BiOj5nqXFGKT920vVSf011iddUwUcyPKF7qWyIRkTZWVWXDqhV"
//}, function(response){
//  console.log(response);
//  var token = response.access_token;
  //write all js in here (yelp)


  //--------
 // $.ajax({
 //   url: "https://api.yelp.com/v3/businesses/search?location=Washington+DC",
 //   headers:{"Authorization": "Bearer " + token}
 // }).done(function(response){
//    console.log(response);
//  });
  //responses received from

$(function(){
    var select=document.getElementById("deal-category");
    catData={'product': ["beauty_health","automotive"], 'fitness':["boot-camp", "fitness-classes"]
  };
  var categoryKeys=Object.keys(catData);
  populateDropdown('deal-category', categoryKeys);
});
function populateDropdown(elementId, options){
  var $dropdown = $("#" + elementId);
    options.forEach(function(optionVal){
      var optionElement = new Option(optionVal, optionVal);
      $(optionElement).html(optionVal);
      $dropdown.append(optionElement);
  });    
};
// event handler for #deal-category on change
      // gets the selection and uses it to call populateDropdown for the sub category dropdown ex. catData[selection]
$("#deal-category").on("change",function(){
    var category = $(this).find("option:selected").val();
    console.log(category);
    var subs=catData[category];
    $('#deal-sub').empty();
    populateDropdown('deal-sub', subs);
});

//Sqoot API
var authKey = "BfnFKFtwdc-UU9MV9jZE";
var queryURL = "http://api.sqoot.com/v2/deals?api_key=" + authKey


 $.ajax({
    url: queryURL,
    method: "GET"
}).done(function(sqootData) {

  console.log(sqootData);

});

