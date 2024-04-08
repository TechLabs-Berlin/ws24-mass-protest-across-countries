import { Form }  from 'react-bootstrap';

function YearSelector({ years, selectedYear, onYearSelect }) {
  return (
    <Form.Select
      className="form-select-lg"
      value={selectedYear} onChange={(e) => onYearSelect(e.target.value)}>
      <option value="">Past protests</option>
      {years.map(year => (
          <option key={year} value={year}>{year}</option>
      ))}                     
    </Form.Select>
  );
}

export default YearSelector;