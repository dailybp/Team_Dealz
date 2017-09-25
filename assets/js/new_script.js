$.post("https://api.yelp.com/oauth2/token",{
  grant_type: "client_credentials",
  client_id: "l_OltA5Ew4ICDizscxfjeg",
  client_secret: "yfDHBhk1vmpuW5BiOj5nqXFGKT920vVSf011iddUwUcyPKF7qWyIRkTZWVWXDqhV"
}, function(response){
  console.log(response);
  var token = response.access_token;
  //write all js in here (yelp)


  //--------
  $.ajax({
    url: "https://api.yelp.com/v3/businesses/search?location=Washington+DC",
    headers:{"Authorization": "Bearer " + token}
  }).done(function(response){
    console.log(response);
  });
  //responses received from


});
