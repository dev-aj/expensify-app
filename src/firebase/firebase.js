import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  
  export { firebase, database as default };





/*
  database.ref().set({
      name: 'Amar Jyoti',
      stressLevel: 6,
      job:{
          title:"Software developer",
          company:"Amazon"
      },
       location:{
           City:'Seattle',
           Country: 'USA'
       },
       Age: 22
  }).then(() => {
      console.log("Data is saved!");
  }).catch((e) => {
      console.log("Something wrong", e);
  });
*/
//database.ref().set("Any value");      //This line will override the whole db with data "Any Value"

//To update a child

// database.ref('Age').set(23);
//database.ref('isSingle').set(true);
// database.ref('location/City').set('Ranchi');

//Add new property
/*
database.ref('attributtes').set({
    height:'165cm',
    weight:'67kg'
}).then(() => {
    console.log("Data inserted!");
}).catch((e) => {
    console.log("Eroor",e);
});
*/

// database.ref('isSingle').remove()
//     .then(() => {
//         console.log("Data Removed");
//     }).catch((e) => {
//         console.log("Error in removing",e);
//     });

//UPDATING DATA
/*
database.ref().update({
    stressLevel: 9,
    'job/company':'Google',
    'location/City':'Philadelphia'
});
*/


//FETCHING DATA
/*
database.ref()
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    }).catch((e) => {
        console.log("Error in fetching!",e);
    });
    */

//To subscribe to the changes in the DB
/*
database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}, (e) => {
    console.log("Something went wrong!",e);
});
*/

//SETTING LIST ITEMS

/*
database.ref('expenses').push({
    description:"Rent Bill",
    Note:'Cash',
    amount:250,
    createdAt: 2345
});

*/
/*
database.ref('expenses')
    .once('value')
    .then((snapshot) =>{
        const expenses=[];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id:childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log(expenses);
    });
*/
/*
database.ref('expenses').on('value', (snapshot) =>{
    const expenses=[];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id:childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log(expenses);
}, (e) => {
    console.log("Something went wrong", e);
});
*/

//EVENTS - child_changed

// database.ref('expenses').on('child_changed', (snapshot) =>{
//         console.log(snapshot.key, snapshot.val());
// }, (e) => {
//     console.log("Something went wrong", e);
// });