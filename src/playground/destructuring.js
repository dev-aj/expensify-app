/* - - - -- - - - --  --  -- Object destructuring- - - -- - -- - - -- - -- - - -- - - - - - - - - - - - - - - */


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher:{
        name:'Penguin'
    }
};

const {name:publisherName = 'Self-Published'} = book.publisher;

//Above we are renaming the variable name of publisher object and giving it a default value to self published

console.log(publisherName);



/* - - - -- - - - --  --  -- Array destructuring- - - -- - -- - - -- - -- - - -- - - - - - - - - - - - - - - */

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];

const [itemName,, mediumPrice] = item;

console.log(`A ${itemName} costs ${mediumPrice}`);

