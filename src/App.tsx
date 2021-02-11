import React, {useState} from 'react';
import s from './App.module.css';
import {SearchBar} from "./components/SearchBar";
import {ProductTable} from "./components/ProductTable/ProductTable";
import product from "./components/store";

function App() {

    const [filterText , setFilterText] = useState('');
    const [inStockOnly, setIsStockOnly] = useState(false)

    const handleFilterTextChange = (filterText:any) =>{
        setFilterText(filterText)
    }
    const handleInStockChange = (inStockOnly:any) =>{
        setIsStockOnly(inStockOnly)
    }

    return (
        <div className={s.App}>
            <SearchBar
                filterText={filterText}
                inStockOnly = {inStockOnly}
                onFilterTextChange = {handleFilterTextChange}
                onInStockChange = {handleInStockChange}
            />
            <ProductTable
                products={product}
                filterText={filterText}
                inStockOnly = {inStockOnly}

            />
        </div>
    );
}


export default App;
