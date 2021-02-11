import React from 'react';
import s from './App.module.css';
import {SearchBar} from "./components/SearchBar";
import {ProductTable} from "./components/ProductTable/ProductTable";
import product from "./components/store";

function App() {
    return (
        <div className={s.App}>
            <SearchBar/>
            <ProductTable products={product}/>
        </div>
    );
}


export default App;
