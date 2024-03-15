function Dropdowns({ selectedDistrict, selectedCategory, setSelectedDistrict, setSelectedCategory }) {
    return (
        <div>
            <div>
                <label>
                    Location: 
                    <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                        <option value="">-- Select District --</option>
                        <option value="Charlottenburg-Wilmersdorf">Charlottenburg-Wilmersdorf</option>
                        <option value="Friedrichshain-Kreuzberg">Friedrichshain-Kreuzberg</option>
                        <option value="Lichtenberg">Lichtenberg-Hohenschönhausen</option>
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
            <br />
            <div>
                <label>
                    Categories: 
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="">-- Select Category --</option>
                        <option value="National politics">National politics</option>
                        <option value="International politics">International politics</option>
                        <option value="Environment">Environment</option>
                        <option value="Housing">Housing</option>
                        <option value="Human Rights">Human Rights</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Economy">(Finance/Economy)</option>
                    </select>
                </label>
            </div>
            <br />
        </div>
    );
}

export default Dropdowns;