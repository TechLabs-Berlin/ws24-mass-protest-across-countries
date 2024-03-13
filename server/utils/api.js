const Protest = require("../data/protest")

const getProtest = async (req, res) => {
        try {
                // Fetch MongoDB object from the database
                const foundProtests = await Protest.find({ year: 2024 });
            
                if (!foundProtests.length === 0) {
                  return res.status(404).json({ message: 'Object not found' });
                }
            
                // Convert MongoDB object to JSON format
                const jsonProtests = foundProtests.map(protest => protest.toJSON());
            
                // Send JSON object as a response
                res.json(jsonProtests);
              } catch (error) {
                console.error('Error fetching object:', error);
                res.status(500).json({ message: 'Internal server error' });
              }
}

module.exports = getProtest;