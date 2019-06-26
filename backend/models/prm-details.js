const mongoose = require('mongoose');

const prmSchema = new mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    Summary: mongoose.SchemaTypes.String,
    Importance: mongoose.SchemaTypes.String,
    Labo: mongoose.SchemaTypes.String,
    MileStone: mongoose.SchemaTypes.String,
    DprId: mongoose.SchemaTypes.String,
    Progress: mongoose.SchemaTypes.String,
    RelationTickets: [{
        Summary: mongoose.SchemaTypes.String,
        Importance: mongoose.SchemaTypes.String,
        Labo: mongoose.SchemaTypes.String,
        MileStone: mongoose.SchemaTypes.String,
        BugId: mongoose.SchemaTypes.String,
        Progress: mongoose.SchemaTypes.String,
    }]
});

module.exports = mongoose.model('prm_details', prmSchema);