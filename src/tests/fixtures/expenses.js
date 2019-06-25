import moment from 'moment';

export default [{
    id:'1',
    description:"Gym",
    note:"",
    amount:213,
    createdAt:0
},
{
    id:'2',
    description:"Rent",
    note:"",
    amount:2113,
    createdAt:moment(0).subtract(4, 'days').valueOf()  //We are subtracting 4 days from start date 0 and returning a number using value of
},
{
    id:'1',
    description:"Electricity",
    note:"",
    amount:2013,
    createdAt:moment(0).add(4, 'days').valueOf()
}];