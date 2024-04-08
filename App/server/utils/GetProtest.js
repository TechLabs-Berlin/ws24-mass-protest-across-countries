const Protest = require("../data/protest")
const AppError = require("./AppError");
const catchAsync = require("./CatchAsync");

// Route handler to fetch protests based on query parameters
const getProtest = catchAsync(async (req, res) => {

    // Extract query parameters from client request
    const { year, event_date, category, district } = req.query;

    // Construct query object based on provided query parameters
    const query = {};
    if (year) query.year = year;
    if (event_date) {
        const date = new Date(event_date); // Date.Now() => lt: past
        if (date.getTime() === new Date('2024-02-20T00:00:00.000Z').getTime()) {
            // Filter for next week:
            query.event_date = { $gte: date };
        } else if (date.getTime() === new Date('2024-03-01T23:59:59.999Z').getTime()) {
            // Filter for next month:
            query.event_date = { $gte: date };
        }
    }
    if (category) query.category = { $in: category.split(',') };
    if (district) query.district = { $in: district.split(',') };

    // Fetch protests from database
    const foundProtests = await Protest.find(query);

    // Convert MongoDB object to JSON format
    const jsonProtests = foundProtests.map(protest => protest.toJSON());

    // Send JSON object as a response
    res.json(jsonProtests);
})

module.exports = getProtest;