import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';


export class ExpenseListFilters extends React.Component{

    state = {
        calenderFocused: null
    }
    
    onDatesChange = ({startDate, endDate}) =>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }));
    }

    onTextChange = (e) =>{
        this.props.setTextFilter(e.target.value);
    }

    onSortChange = (e) => {
        if(e.target.value === 'date') {     //Controlled inputs as Input is controlled by JavaScript
            this.props.sortByDate();
        } else if(e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    }

    render(){
        return(
                <div>
                    <input 
                        type="text" 
                        value = {this.props.filters.text} onChange = { this.onTextChange } 
                    />
                    <select 
                        value={this.props.filters.sortBy}
                        onChange = { this.onSortChange }
                    >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                    </select>
                    
                    <DateRangePicker 
                        startDate = {this.props.filters.startDate}
                        endDate= {this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput= {this.state.calenderFocused}
                        onFocusChange = {this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths = {1}
                        isOutsideRange={() => false}
                    />

                </div>
        );
    }
};


const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (EndDate) => dispatch(setEndDate(EndDate))
});


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

//When we connect state to props using connect , we also have access to dispatch method of redux


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);