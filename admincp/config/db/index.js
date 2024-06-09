const mongoose = require('mongoose');


    async function connect() {
        try {
            await mongoose.connect('mongodb://127.0.0.1:27017/benh_vien_so_1', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log('connect successfully');
        } catch (error) {
            console.log('connect failute');
        }
    }




module.exports = { connect };