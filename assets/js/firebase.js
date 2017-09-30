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

$("#submit-search").on("click", function(event){
  event.preventDefault();

  var newDeal = {
    deal : deal
  };

  dataRef.ref().push(newDeal);
  console.log(newDeal);
})
