import { login, logout } from '../../actions/auth';

test('Should return login action', () => {
    const uid = '123abc';
    const action = login(uid);
    expect(action).toEqual({
        type:'LOGIN',
        uid
    });
});

test('Should return logout action', () => {
    const action = logout();
    expect(action).toEqual({
        type:'LOGOUT'
    });
});