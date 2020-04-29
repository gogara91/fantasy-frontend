import React, {useEffect, useState} from "react";
import FormGroup from "../pageBuilder/FormGroup";
import CustomDropdown from "../partials/CustomDropdown";
import{setPlayerName, setSortBy, setSelectedTeamsFilter} from '../../redux/actions/FantasyTeamPlayersSelectorActions';
import {useDispatch, useSelector} from "react-redux";
import {fetchTeams} from "../../redux/actions/teamsActions";
import {fetchAllPlayers} from '../../redux/actions/playerActions';
import PlayersList from "./PlayersList";
export default (props) => {
    const dispatch = useDispatch();
    const [isOrderByDropdownActive, switchIsOrderByDropdownActive] = useState(false);
    const [isTeamsDropdownActive, switchIsTeamsDropdownActive] = useState(false);

    const checkedTeams = useSelector(store => store.FantasyTeamPlayersSelectorStore.teamsFilter);
    const playerInput = useSelector(store => store.FantasyTeamPlayersSelectorStore.playerNameFilter);

    const storeTeams = useSelector(store => store.TeamsStore.teams);
    const teams = storeTeams ? storeTeams.map(team => {
        return { key: team.id, value: team.full_name }
    }) : [];
    useEffect(()=> {
        dispatch(fetchTeams());
        dispatch(fetchAllPlayers());

    }, [])

    const switchTeamsDropdown = () => {
        switchIsTeamsDropdownActive(!isTeamsDropdownActive);
        switchIsOrderByDropdownActive(false);
    }

    const switchOrderByDropdown = () => {
        switchIsOrderByDropdownActive(!isOrderByDropdownActive);
        switchIsTeamsDropdownActive(false);
    }

    const setOrderBySelectedItems = (item) => {
        dispatch(setSortBy(item.key))
    }

    const setSelectedTeams = (item) => {
        const isChecked = checkedTeams.filter(checked => item.key === checked.key).length
        if(isChecked) {
            const checked = checkedTeams
                .filter(checked => item.key !== checked.key);
            dispatch(setSelectedTeamsFilter([...checked]));
            return;
        }
        dispatch(setSelectedTeamsFilter([...checkedTeams, item]));
    }

    const onPlayerSearchInput = (e) => {
        dispatch(setPlayerName(e.target.value));
    }

    const orderByListItems = [
        {
            key: 'name_desc',
            value: 'Name descending'
        },
        {
            key: 'name_asc',
            value: 'Name ascending'
        },
        {
            key: 'credits_desc',
            value: 'Credits descending'
        },
        {
            key: 'credits_asc',
            value: 'Credits ascending'
        },
        {
            key: 'avg_points_desc',
            value: 'Average points descending'
        },
        {
            key: 'avg_points_asc',
            value: 'Average points ascending'
        },
        {
            key: 'tot_points_desc',
            value: 'Total points descending'
        },
        {
            key: 'tot_points_asc',
            value: 'Total points ascending'
        }
    ]

    return (
        <>
        <div className="row">
            <div className="col-md-12">
                <FormGroup
                    label=" Choose players"
                    input={{
                        name: 'player_name',
                        type: 'text',
                        placeholder: 'Search player',
                        value: playerInput
                    }}
                    onInputChange={(e)=> onPlayerSearchInput(e)}
                />
            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <CustomDropdown
                    switchActive={()=> switchOrderByDropdown()}
                    isActive={isOrderByDropdownActive}
                    listItems={orderByListItems}
                    setSelectedItems={(items) => setOrderBySelectedItems(items)}
                    placeholder="Sort by..."
                    multiselect={false}
                />
            </div>
            <div className="col-md-6">
                <CustomDropdown
                    switchActive={()=> switchTeamsDropdown()}
                    isActive={isTeamsDropdownActive}
                    listItems={teams}
                    placeholder="Teams..."
                    selectedPlaceholder="Teams Selected: "
                    multiselect={true}
                    checkedItems={checkedTeams}
                    setSelectedItems={(item) => setSelectedTeams(item)}
                />
            </div>
        </div>
        </>
    )
}