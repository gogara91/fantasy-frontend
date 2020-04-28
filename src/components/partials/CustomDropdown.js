import React, {useState} from 'react';
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
        setPlaceholder(el.value)
    }

    return (
        <div className={dropdownWrapperClasses.join(' ')}>
            <div className="title-bar" onClick={() => toggleDropdown()}>
                <span className="title-bar-text">{placeholder}</span>
                <span className="title-bar-icon">
                            <FontAwesomeIcon
                                icon={props.isActive ? faAngleUp : faAngleDown}
                            />
                        </span>
            </div>
            {!props.isActive ? '' :
                <CustomDropdownItems
                    onSelect={(el)=> onSelect(el)}
                    items={props.listItems}
                />
            }
        </div>
    )
}