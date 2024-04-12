import { Form }  from 'react-bootstrap';

function PeriodSelector({ selectedPeriod, setSelectedPeriod }) {
  const nextWeek = '2024-02-20T00:00:00.000Z';
  const nextMonth = '2024-03-01T23:59:59.999Z';

  return (
    <Form.Select 
      className="form-select-lg"
      value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)}>
      <option value="">Upcoming protests</option>
      <option value={nextWeek}>Next week</option> 
      <option value={nextMonth}>Next month</option>             
    </Form.Select>
  );
}

export default PeriodSelector;