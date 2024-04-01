function YearSelector({ years, onYearSelect }) {
    return (
        <div>
            <label htmlFor="year-select">
                <select id="year-select" onChange={(e) => onYearSelect(e.target.value)}>
                    <option value="">Past protests</option>
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}         
                </select>
            </label>
        </div>
    );
}

export default YearSelector;