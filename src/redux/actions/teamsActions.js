import TeamsService from "../../services/TeamsService";

export const FETCH_TEAMS = 'FETCH_TEAMS';

const fetchTeamsDispatcher = (data) => {
    return {
            type: FETCH_TEAMS,
            payload: data
    }

};

export const fetchTeams = () => {
    return async (dispatch) => {
        try {
            const { data } = await TeamsService.allTeams();
            return dispatch(fetchTeamsDispatcher(data));
        } catch(e) {
            console.log(e);
        }

    }
}