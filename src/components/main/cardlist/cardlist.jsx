import React, { useState, useEffect } from "react";
import { getAllCharacters } from "../../../redux/actions/actions";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/card";

export default function CardList(){
    const dispatch = useDispatch()
    const state = useSelector((state)=>state.characters)
    const state2 = useSelector((state)=>state.charactersSearched)
    let [pageNumber, updateNumber] = useState(1)
    useEffect(()=>{
        dispatch(getAllCharacters(pageNumber))
    },[pageNumber])
    function handleUpdate(data){
        updateNumber(data.selected + 1)
    }
    return (
        <div className="z-5">
            <div className="grid grid-cols-3 gap-2 m-2">
                {state2.results?.length === 0 || state2.length === 0? state?.results?.map((character)=>(
                <Card props={character}/>
                )) : state2?.results?.map((character)=>(
                    <Card props={character}/>
                    ))}
            </div>
            <ReactPaginate
            className="flex justify-center gap-4 text-white "
            pageCount={state?.info?.pages}
            previousLabel="Prev"
            previousClassName="bg-common p-1 rounded-xl hover:text-gray-900 opacity-90"
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            nextLabel="Next"
            nextClassName="bg-common p-1 rounded-xl hover:text-gray-900 opacity-90"
            onPageChange={handleUpdate}
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            />
        </div>
    )
}