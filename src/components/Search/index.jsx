import React, { useState } from "react";
import './Search.scss'
import historyData from './historyData'

function Search() {

    const [value, setValue] = useState('')

    const filteredHistory = historyData.filter((data) =>
        data.age.toLowerCase().includes(value.toLowerCase())
    )

    return (
        <div className='search'>
            <input placeholder="Введите дату" className="search__input" onChange={(event) => setValue(event.target.value)} />
            {value.length ? <ul className="search__text">{filteredHistory.map((data, index) =>
                <li key={index}>
                    {data.age}
                </li>)}
            </ul> : <div></div>}
        </div>
    )
}
export default Search;
