import { UserData } from "./users";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  Users: UserData[];
};

export enum SomeActions {
  "SAVE_USER" = "SAVE_USER",
  "GET_USER" = "GET_USER",
}

export interface SaveUserAction {
  action: SomeActions.SAVE_USER;
  payload: UserData;
}

export interface GetUserAction {
  action: SomeActions.GET_USER;
  payload: UserData;
}

export type Actions = SaveUserAction | GetUserAction;
