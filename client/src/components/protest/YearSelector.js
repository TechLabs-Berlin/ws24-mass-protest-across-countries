import React from 'react';

export default function YearSelector({ years, onYearSelect }) {
    return (
        <div>
            <label htmlFor="year-select">Year: </label>
            <select id="year-select" onChange={(e) => onYearSelect(e.target.value)}>
                <option value="">-- Select Year --</option>
                {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}         
            </select>
            <br/>
            <br/>
            <hr />
        </div>
    );
}
