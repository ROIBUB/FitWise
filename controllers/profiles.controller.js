// here we fetch the data from the models as a list
const profilesController = require('../models/profiles.model');
// function to get all the users and its response JSON
const getAllProfiles = (req, res) => {
    res.status(200).json({
        success: true,
        data: profilesController,
        error: null
    });
};
// here we fetch by userId and its JSON response if he didn't find it
const getProfileById = (req, res) => {
    const id = parseInt(req.params.id);

    const profile = profilesController.find(p => p.userid === id);

    if (!profile) {
        return res.status(404).json({
            success: false,
            data: null,
            error: {
                code: "NOT_FOUND",
                message: "Profile not found",
                details: {}
            }
        });
    }
    // if he did find
    res.status(200).json({
        success: true,
        data: profile,
        error: null
    });
};
// we export those function so other files can use them
module.exports = {
    getAllProfiles,
    getProfileById
};