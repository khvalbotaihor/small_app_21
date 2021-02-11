import React from "react";

export const SearchBar = (props:any) => {
debugger;

    const filterText = props.filterText
    const inStockOnly = props.inStockOnly

    const handleFilterTextChange = (e:any) =>{
        props.onFilterTextChange(e.target.value)
    }
    const handleInStockChange = (e:any) =>{
        props.onInStockChange(e.target.checked)
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={handleFilterTextChange}
            />
            <p>
                <input
                    checked={inStockOnly}
                    type="checkbox"
                    onChange={handleInStockChange}
                />
                {" "} Only show products in stock
            </p>

        </form>
    )
}