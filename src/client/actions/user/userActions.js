import * as types from './userActionsTypes';
import dispatcher from '../dispatcher';

const userActions = {
    register: (user) => {
        dispatcher.dispatch({
            type: types.USER_REGISTER,
            payload: user
        });
    }
};

export default userActions;
