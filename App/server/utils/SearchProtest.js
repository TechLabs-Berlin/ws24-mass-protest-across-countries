const Protest = require("../data/protest");
const ExpressError = require("./ExpressError")

const searchProtest = async (req, res, next) => {
    try {
        const { searchterm } = req.query;

        if (!searchterm) {
            throw new ExpressError("Search term is missing'", 400)
        }

        const searchTerm = searchterm.trim();
        console.log(searchTerm);

        // Get all string fields in my Protest schema
        const stringFields = Object.keys(Protest.schema.paths).filter(
            key => Protest.schema.paths[key].instance === 'String'
        );

        // Query database for protests based on the searchTerm
        const regex = new RegExp(`^.*${searchTerm}.*$`, 'i'); // 'i' flag for case-insensitive search
        const stringFieldQuery = {
            // Use $or operator to search multiple fields, adjust as needed
            $or: stringFields.map(field => ({ [field]: { $regex: regex } }))
        };
        console.log(stringFieldQuery)

        let yearQuery = {};
        // Only construct yearQuery if searchTerm is numeric
        if (!isNaN(searchTerm)) {
            yearQuery = { year: parseInt(searchTerm) };
        }

        const mergedQuery = {
            $and: [stringFieldQuery, yearQuery]
        };

        const protests = await Protest.find(mergedQuery);

        if (protests.length === 0) {
            throw new ExpressError("No protests found", 404)
        }
        // Send JSON object as a response
        res.json(protests);
    } catch (err) {
        console.error('Error fetching protests:', err);
        next(err)
    }
}

module.exports = searchProtest;