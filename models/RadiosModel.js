const pool = require("../database/database");

module.exports = class RadiosModel {
    static radios(callback){
        return pool.query( 'select * from radio.cad_radios', callback
        
        );
    }

    static radios(cllback){
        return pool.query('')
    }
}