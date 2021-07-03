function setup() {
    var firebaseConfig = {
        apiKey: "AIzaSyBTzpSwQkSoLvV8FMAwx0nqRUY23zp_AIs",
        authDomain: "fireclick-b01b0.firebaseapp.com",
        databaseURL: "https://fireclick-b01b0-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "fireclick-b01b0",
        storageBucket: "fireclick-b01b0.appspot.com",
        messagingSenderId: "94470834521",
        appId: "1:94470834521:web:f2fc1827f2564ce508e448",
        measurementId: "G-C2LCGZZ8YD"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    } else {
        firebase.app()
    }

    var database = firebase.database();

    var fruits = database.ref('fruits');

    var fruit = prompt('What fruit did you eat?')
    var amount = prompt('How many?')

    var data = {
        name: fruit,
        count: amount
    }

    fruits.push(data, finished);

    function finished(error) {
        if (error) {
            console.log("Error!")
        } else {
            console.log("Saved!")
        }
    }
}