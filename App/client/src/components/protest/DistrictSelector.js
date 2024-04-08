import { Form }  from 'react-bootstrap';

function DistrictSelector({ selectedDistrict, setSelectedDistrict }) {
  return (
    <Form.Select
      className="form-select-lg"
      value={selectedDistrict}
      onChange={(e) => setSelectedDistrict(e.target.value)}
    >
      <option value="">Select location</option>
      <option value="Charlottenburg-Wilmersdorf">
        Charlottenburg-Wilmersdorf
      </option>
      <option value="Friedrichshain-Kreuzberg">
        Friedrichshain-Kreuzberg
      </option>
      <option value="Lichtenberg">Lichtenberg</option>
      <option value="Marzahn-Hellersdorf">Marzahn-Hellersdorf</option>
      <option value="Mitte">Mitte</option>
      <option value="Neukolln">Neukölln</option>
      <option value="Pankow">Pankow</option>
      <option value="Reinickendorf">Reinickendorf</option>
      <option value="Spandau">Spandau</option>
      <option value="Steglitz-Zehlendorf">Steglitz-Zehlendorf</option>
      <option value="Tempelhof-Schoneberg">Tempelhof-Schöneberg</option>
      <option value="Treptow-Kopenick">Treptow-Köpenick</option>
    </Form.Select>
  );
}
  
  export default DistrictSelector;