import { Form } from "react-bootstrap";

function CategorySelector({ selectedCategory, setSelectedCategory }) {
  return (
    <Form.Select className="form-select-lg"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option value="">Select category</option>
      <option value="Local">Local</option>
      <option value="War / Peace">War/Peace</option>
      <option value="Environment">Environment</option>
      <option value="Health">Health</option>
      <option value="Human Rights">Human Rights</option>
      <option value="Economy">Economy</option>
    </Form.Select>
  );
}

export default CategorySelector;