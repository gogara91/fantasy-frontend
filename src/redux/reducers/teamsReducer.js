import * as teamActions from "../actions/teamsActions";

const initialState = {
    teams: []
};

export const TeamsStore = (state = initialState, action) => {
    switch(action.type) {
        case teamActions.FETCH_TEAMS:
            return {
                ...state,
                teams: [...action.payload]
            }

        default: return state;
    }
};
