import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import NumberFormat from 'react-number-format';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3> {description} </h3>
            </Link>
            
            <p>
            <NumberFormat thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'} displayType="text" value={amount} />
            - 
            {moment(createdAt).format("dddd, MMMM Do YYYY")}
            </p>
        </div>
    );
};


export default ExpenseListItem; 