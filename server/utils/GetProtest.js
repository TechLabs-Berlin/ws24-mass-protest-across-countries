const Protest = require("../data/protest")

const getProtest = async (req, res) => {
        try {   
                const { year, categories, district } = req.query;
        
                // Construct query object based on provided query parameters
                const query = {};
                if (year) query.year = year;
                if (categories) query.categories = { $in: categories.split(',') };
                if (district) query.district = { $in: district.split(',') };

                // Fetch protests from database
                const foundProtests = await Protest.find(query);
            
                if (foundProtests.length === 0) {
                  return res.status(404).json({ message: 'Object not found' });
                }
            
                // Convert MongoDB object to JSON format
                const jsonProtests = foundProtests.map(protest => protest.toJSON());
            
                // Send JSON object as a response
                res.json(jsonProtests);
        } catch (error) {
                console.error('Error fetching protests:', error);
                res.status(500).json({ message: 'Internal server error' });
        }
}

module.exports = getProtest;