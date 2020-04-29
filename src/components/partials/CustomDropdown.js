import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import CustomDropdownItems from "./CustomDropdownItems";
import CustomDropdownStyles from '../../css/CustomDropdown.css'

export default (props) => {

    const [dropdownWrapperClasses, setDropdownWrapperClasses] =
        useState(['custom-dropdown']);
    const [placeholder, setPlaceholder] = useState(props.placeholder);
    const toggleDropdown = () => {
        props.switchActive();
        if(!props.isActive) {
            setDropdownWrapperClasses([...dropdownWrapperClasses, 'active'])
        } else {
            setDropdownWrapperClasses(
                dropdownWrapperClasses.filter(className => className !== 'active')
            )
        }
    }

    const onSelect = (el) => {
        props.setSelectedItems(el);
        if(!props.multiselect) {
            setPlaceholder(el.value);
            props.switchActive();
        }
    }

    return (
        <div className={dropdownWrapperClasses.join(' ')}>
            <div className="title-bar" onClick={() => toggleDropdown()}>
                <span className="title-bar-text">
                    <Placeholder
                        text={placeholder}
                        selectedPlaceholder={props.selectedPlaceholder}
                        items={props.checkedItems}
                    />
                </span>
                <span className="title-bar-icon">
                            <FontAwesomeIcon
                                icon={props.isActive ? faAngleUp : faAngleDown}
                            />
                        </span>
            </div>
            {!props.isActive ? '' :
                <CustomDropdownItems
                    multiselect={props.multiselect}
                    checkedItems={props.checkedItems}
                    onSelect={(el)=> onSelect(el)}
                    items={props.listItems}
                />
            }
        </div>
    )
}

const Placeholder = (props) => {
    return (
        <>
            {props.selectedPlaceholder && props.items.length ?
                props.selectedPlaceholder + props.items.length : props.text}
        </>
    )
}