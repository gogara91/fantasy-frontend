import React, {useEffect, useState} from 'react';
import PlayerListItem from "../fantasyTeams/PlayerListItem";
import PaginationStyles from '../../css/Pagination.css'
export default (props) => {
    const totalPages = Math.ceil(props.items.length / 10);
    const pagination = [];
    for(let i = 1; i <= totalPages; i++) {
        if((props.currentPage + 1) < i || (props.currentPage-1) > i) {
            continue;
        }
        pagination.push(
            <span key={i} className="page-item" onClick={()=> changePage(i)}>
                <span className="page-link">
                    {props.currentPage == i ? <b>{i}</b> : i}
                </span>
            </span>
        );
    }

    const changePage = (val) => {
        if(val < 1 || val > totalPages) {
            return;
        }
        props.changePageNumber(val)

    }

    return (
        <>
            <div className="pagination">
                <span
                    className="page-item"
                    onClick={() => changePage(props.currentPage-1)}
                >
                    <span className="page-link">
                        {'<'}
                    </span>
                </span>
                {props.currentPage > 2 ?
                    <span className="page-item">
                        <span className="page-link disabled">
                            ...
                        </span>
                    </span> : ''
                }
                {pagination}
                {((totalPages - 1) > props.currentPage) ?
                    <span className="page-item">
                        <span className="page-link disabled">
                            ...
                        </span>
                    </span> : ''
                }
                <span
                    className="page-item"
                    onClick={() => changePage(props.currentPage+1)}
                >
                    <span className="page-link">
                        {'>'}
                    </span>
                </span>
            </div>
        </>
    )
}