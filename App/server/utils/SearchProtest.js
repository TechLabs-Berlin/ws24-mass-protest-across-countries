const Protest = require("../data/protest");
const AppError = require("./AppError");
const catchAsync = require("./CatchAsync");

// Main function for searching protests
const searchProtest = catchAsync(async (req, res) => {
    const { searchterm } = req.query;

    if (!searchterm) {
        throw new AppError("Search term is missing", 400);
    }

    // Split the search term by spaces to get individual terms
    const searchTerms = searchterm.trim().split(" ").filter(term => term); // Remove empty terms

    // Get all string fields in the Protest schema
    const stringFields = Object.keys(Protest.schema.paths).filter(
        key => Protest.schema.paths[key].instance === 'String'
    );

    // Construct regex query for each search term and each string field
    const regexQueries = searchTerms.map(term =>
        stringFields.map(field => ({ [field]: { $regex: new RegExp(term, 'i') } }))
    ).flat();

    // Construct direct equality query for each numeric search term
    const numericQueries = searchTerms.filter(term => !isNaN(parseInt(term))).map(term => ({
        $or: [
            { year: parseInt(term) },
            { day: parseInt(term) }
        ]
    }));

    // Combine regex and numeric queries
    const mergedQuery = {
        $or: [
            ...regexQueries,
            ...numericQueries
        ]
    };

    // Query database for protests based on the merged query
    const protests = await Protest.find(mergedQuery);

    res.json(protests);
});

module.exports = searchProtest;