import { UserData } from "../types/users"
import { Actions, SomeActions } from "../types/store"
import firebase from "../utils/firebase";

export const saveUser = async (user: UserData): Promise<Actions> => {
    await firebase.saveUserInDB(user);
    return {
        action: SomeActions.SAVE_USER,
        payload: user,
    };
};

export const getUsers = async (): Promise<Actions> => {
    const User = await firebase.getUsersFromDB();
    return {
        action: SomeActions.GET_USER,
        payload: User,
    };
};