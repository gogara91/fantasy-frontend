import React, {useEffect, useState} from "react";
import CustomDropdownStyles from '../../css/CustomDropdown.css'

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

    const items = props.items ?
        <>
            {props.items.map(item => <li
                key={item.key}
                onClick={() => onSelect(item)}
            >
                <span>
                    {item.value}
                </span>
            </li>) }
        </> : '';

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