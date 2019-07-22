import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import NumberFormat from 'react-number-format';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    return (
        <Link className="list-item" to={`/edit/${id}`}>
            <div>
                <h3 className="list-item__title"> {description} </h3>
                <span className="list-item__sub-title">{moment(createdAt).format("dddd, MMMM Do YYYY")}</span>
            </div>
            <h3 className="list-item__data">
                <NumberFormat thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'} 
                displayType="text" value={amount} />
            </h3> 
        </Link>
    );
};


export default ExpenseListItem; 