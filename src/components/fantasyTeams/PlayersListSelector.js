import React, {useState} from "react";
import FormGroup from "../pageBuilder/FormGroup";
import CustomDropdown from "../partials/CustomDropdown";
export default (props) => {
    const [isActive, switchIsActive] = useState(false)
    const switchActive = () => {
        switchIsActive(!isActive);
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
                        onChange: '',
                    }}
                />
            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <CustomDropdown
                    switchActive={()=> switchActive()}
                    isActive={isActive}
                    listItems={orderByListItems}
                    placeholder="Sort by..."
                />
            </div>
        </div>
        </>
    )
}