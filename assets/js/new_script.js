var config = {
    apiKey: "AIzaSyBf6G5CDw1GNdhHTUUp8oOmgY9sPQxUCQM",
    authDomain: "dealio-8c33b.firebaseapp.com",
    databaseURL: "https://dealio-8c33b.firebaseio.com",
    projectId: "dealio-8c33b",
    storageBucket: "dealio-8c33b.appspot.com",
    messagingSenderId: "260259922331"
  };
  firebase.initializeApp(config);

var dataRef = firebase.database();

console.log(dataRef);

var phoneNumber = "";

//Yelp API
$.post("https://api.yelp.com/oauth2/token",{
  grant_type: "client_credentials",
  client_id: "l_OltA5Ew4ICDizscxfjeg",
  client_secret: "yfDHBhk1vmpuW5BiOj5nqXFGKT920vVSf011iddUwUcyPKF7qWyIRkTZWVWXDqhV"
}, function(response){
  console.log(response);
  var token = response.access_token;
  //write all js in here (yelp)

  var yelpQueryURL = "https://api.yelp.com/v3/businesses/search?location=" + zipCode + "&ll" + latitude + "," + longitude;
  //--------
  $.ajax({
    url: yelpQueryURL,
    headers:{"Authorization": "Bearer " + token}
  }).done(function(response){
    console.log(response);
  });
  //responses received from
  //$("#reviews-View").html()

});

//Sqoot API
var authKey = "BfnFKFtwdc-UU9MV9jZE";
var queryURL = "http://api.sqoot.com/v2/deals?api_key=" + authKey


 $.ajax({
    url: queryURL,
    method: "GET"
}).done(function(sqootData) {

  $("#deals-View").html(sqootData);//populates the secondary html page with sqootData deals

  // function storeToFirebase(){
  //   dataRef.ref().push(sqootData);
  // }

  console.log(sqootData);
  for(var i = 0; i < sqootData.deals.length; i++){
    phoneNumber = sqootData.deals[i].deal.merchant.phone_number;
    console.log(phoneNumber);
    zipCode = sqootData.deals[i].deal.merchant.postal_code;
    console.log(zipCode);
    latitude = sqootData.deals[i].deal.merchant.latitude;
    console.log(latitude);
    longitude = sqootData.deals[i].deal.merchant.longitude;
    console.log(longitude);
  }

});
