import React, { useState } from "react";

import './fruits-list.styles.scss';

import FRUIT_DATA from './fruits-data';
import Item from "../../item/item.component";

import { BiChevronRight } from 'react-icons/bi'
import ReactPaginate from "react-paginate";

const FruitsList = () => {
    const [items] = useState(FRUIT_DATA);
    const [pageNumber, setPageNumber] = useState(0);

    const itemsPerPage = 8
    const pagesVisited = pageNumber * itemsPerPage

    const displayItems = items
        .slice(pagesVisited, pagesVisited + itemsPerPage)
        .map((item) => (<Item key={item.id} item={item} />));

    const pageCount = Math.ceil(items.length / itemsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div className="flex-col w-[95%] h-[25rem] p-8 vegetableslist">
            <div className="flex justify-between vl-header">
                <div className="font-bold text-2xl mt-4">Fresh Fruits</div>

                <div className="flex more-pagination">
                    <div className="mt-4 h-8 flex text-green-600 cursor-pointer viewmore">
                        <div className="mr-[0.1rem] mt-[0.6rem] view">View more</div>
                        <BiChevronRight className="mt-2 h-6 w-6" />
                    </div>

                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={'paginationbuttons'}
                        previousLinkClassName={'nextbutton'}
                        nextLinkClassName={'nextbutton'}
                        disabledClassName={'paginationDisabled'}
                        activeClassName={'paginationActive'}
                        pageClassName={'page'}

                    />
                </div>
            </div>

            <div className='flex'>
                {displayItems}
            </div>
        </div>
    )
};

export default FruitsList;