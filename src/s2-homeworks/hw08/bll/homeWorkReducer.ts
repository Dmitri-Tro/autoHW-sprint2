import { UserType } from '../HW8';

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number };

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            const sortedState = [...state];

            if (action.payload === 'up') {
                return sortedState.sort((a, b) => a.name.localeCompare(b.name));
            } else {
                return sortedState.sort((a, b) => b.name.localeCompare(a.name));
            }
        }
        case 'check': {
            return state.filter((user) => user.age >= action.payload);
        }
        default:
            return state;
    }
};
