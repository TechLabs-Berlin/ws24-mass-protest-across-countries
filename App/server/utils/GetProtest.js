const Protest = require("../data/protest")

const getProtest = async (req, res) => {
        try {   
                const { year, event_date, category, district } = req.query;
        
                // Construct query object based on provided query parameters
                const query = {};
                if (year) query.year = year;
                if (event_date) {
                    const date = new Date(event_date);
                    if (date.getTime() === new Date('2024-02-01T00:00:00.000Z').getTime()) {
                        // Filter for next week:
                        query.event_date = { $gte: date };
                    } else if (date.getTime() === new Date('2023-12-31T23:59:59.999Z').getTime()) {
                        // Filter for next month:
                        query.event_date = { $gte: date };
                    }
                }
                if (category) query.category = { $in: category.split(',') };
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