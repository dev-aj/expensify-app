import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filterReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, {type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const state = filterReducer(currentState, {type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set text Filter', () => {
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const action = {
        type:'SET_TEXT_FILTER',
        text:'re'
    }
    const state = filterReducer(currentState, action);
    expect(state.text).toBe('re');
});

test('should set start date', () => {
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const action = {
        type:'SET_START_DATE',
        startDate:moment(0).subtract(4, 'days').valueOf()
    }
    const state = filterReducer(currentState, action);
    expect(state.startDate).toBe(moment(0).subtract(4, 'days').valueOf());
});

test('should set end date', () => {
    const endDate = moment();
    const action = {
        type:'SET_END_DATE',
        endDate
    }
    const state = filterReducer(undefined, action);
    expect(state.endDate).toEqual(endDate)
});

