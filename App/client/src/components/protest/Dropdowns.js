function Dropdowns({ selectedDistrict, selectedCategory, setSelectedDistrict, setSelectedCategory }) {
    return (
        <div>
            <div>
                <label>
                    <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                        <option value="">Location</option>
                        <option value="Charlottenburg-Wilmersdorf">Charlottenburg-Wilmersdorf</option>
                        <option value="Friedrichshain-Kreuzberg">Friedrichshain-Kreuzberg</option>
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
                     </select>
                </label>
            </div>
            <div>
                <label> 
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
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
        </div>
    );
}

export default Dropdowns;