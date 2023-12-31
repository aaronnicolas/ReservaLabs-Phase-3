import mongoose from 'mongoose';

function connect() {
    return mongoose.connect(process.env.MONGODB_URI, { dbName: process.env.DB_NAME });
}

export default connect;
