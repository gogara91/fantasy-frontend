import React, {useEffect, useState} from "react";
import '../../css/CustomDropdown.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons";

export default (props) => {
    const customDropdownList = React.createRef();
    const [scrollY, setScrollY] = useState('');
    const [height, setHeight] = useState();
    const [visibility, setVisibility] = useState('hidden');

    useEffect(()=>{
        setHeight(customDropdownList.current.clientHeight)
        if(customDropdownList.current.clientHeight > 200) {
            setHeight('200px')
            setScrollY('scroll-y');
        }
        setVisibility('visible');
    }, [])

    const onSelect = (item) => {
        props.onSelect(item);
    }

    let items = '';

    if(props.multiselect) {
        items = !props.items ? '' :
            <>
                {props.items.map(item => {
                    const isChecked = props.checkedItems
                        .filter(checked => checked.key === item.key).length;

                    const checkedStyles = {
                        color: isChecked ? 'rgb(0,220,90)' : 'rgb(220,220,220)'
                    }
                    return <li
                        className="item"
                        key={item.key}
                        onClick={() => onSelect(item)}
                    >
                        <span>
                            <FontAwesomeIcon
                                icon={faCheckSquare}
                                style={checkedStyles}
                            /> {item.value}
                        </span>
                    </li>
                    }
                )}
            </>
    } else {
        items = !props.items ? '' :
        <>
            {props.items.map(item => <li
                className="item"
                key={item.key}
                onClick={() => onSelect(item)}
            >
                <span>
                    {item.value}
                </span>
            </li>) }
        </>
    }

    return (
        <div className="custom-dropdown-outer-container" ref={customDropdownList}>
            <ul
                className={`custom-dropdown-list ${scrollY}`}
                style={{
                    visibility: visibility,
                    height: height
                }}
            >
                {items}
            </ul>
        </div>
    )
}