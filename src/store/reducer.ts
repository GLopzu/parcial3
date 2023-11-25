import UserList from "../components/Userlist/Userlist";
import { Actions, AppState, SomeActions } from "../types/store";

export const reducer = (actions: Actions, state: AppState) => {
    const { action, payload } = actions;

    switch (action) {
        case SomeActions.SAVE_USER:
            state.Users = [...state.Users, payload];
            return state;


            case SomeActions.GET_USER:
                state.Users = payload;
                return state;

        default:
            return state;

    }
}