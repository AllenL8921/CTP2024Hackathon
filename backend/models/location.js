const mongoose = require('mongoose');


//GeoJson schema
const locationSchema = new mongoose.Schema({
    location: String,
    boro_name: String,
    street: String,
    neighborhood: String,
    coordinates: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: [Number]
    }
});

locationSchema.index({ coordinates: '2dsphere' });

const Location = mongoose.model('Location', locationSchema);

// Example of saving a document to mongodb
const newLocation = new Location({
    location: "Bronx Community College",
    resourceType: "Food Pantry",
    boro_name: "Bronx",
    street: "University Avenue",
    neighborhood: "University Heights",
    coordinates: {
        type: "Point",
        coordinates: [-73.91201572883575, 40.857552171946566]
    }
});
