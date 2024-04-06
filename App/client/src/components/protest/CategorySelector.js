function CategorySelector({ selectedCategory, setSelectedCategory }) {
  return (
    <div>
      <label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option value="Local">Local</option>
          <option value="War / Peace">War/Peace</option>
          <option value="Environment">Environment</option>
          <option value="Health">Health</option>
          <option value="Human Rights">Human Rights</option>
          <option value="Economy">Economy</option>
        </select>
      </label>
    </div>
  );
}

export default CategorySelector;
