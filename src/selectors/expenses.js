import moment from 'moment';


// - - - - - -  - - - -- - - - - ADDING FILTER LOGICS - -  - -- - - - - - - - - - - - - - 

//timestamps (milliseconds)
//0  = January1 1970(UNIX EPOCH)
//VAlid timestamps = 22121, 10, -8989

//Get Visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'):true
        const textMatch  = !expense.description || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date')
        return a.createdAt < b.createdAt ? 1 : -1;
        else
        return a.amount < b.amount ? 1 : -1;
    });
};

