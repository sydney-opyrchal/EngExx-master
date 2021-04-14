/* Import mongoose and define any variables needed to create the schema */
import mongoose from 'mongoose';

/* Create your schema for the data in the schools.json file that
 will define how data is saved in your database
     See https://mongoosejs.com/docs/guide.html for examples for creating schemas
     See also
     https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
  */

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email:{ type: String, required: true },
    isAdmin: { type: Boolean, required: true }
});

const teamSchema = new mongoose.Schema({
    teamname: { type: String, required: true },
    score: { type: Integer, required: true },
});

const eventSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    username: { type: String, required: true },
    isApproved:{ type: Boolean, required: true },
});

const tipSchema = new mongoose.Schema({
    username: { type: String, required: true },
    tip: { type: String, required: true },
    isApproved:{ type: Boolean, required: true },
});



/* Use your schema to instantiate a Mongoose model
Export the model to make it available to other parts of your Node application */
//Check out - https://mongoosejs.com/docs/guide.html#models
export default mongoose.model('userSchema', userSchema);
export default mongoose.model('teamSchema', teamSchema);
export default mongoose.model('eventSchema', eventSchema);
export default mongoose.model('tipSchema', tipSchema);