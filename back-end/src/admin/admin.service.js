const knex = require("../db/connection")

function listAll(){
    return knex("user_information")
    .where({administer_access: false})
    .select("*")
}

function findUser(search_param) {
    return knex('user_information')
        .select('user_id', 'user_first_name', 'user_last_name', 'user_email')
        .where(function() {
            this.where(knex.raw('LOWER(user_first_name)'), 'like', `%${search_param.toLowerCase()}%`)
                .orWhere(knex.raw('LOWER(user_last_name)'), 'like', `%${search_param.toLowerCase()}%`)
                .orWhere(knex.raw('LOWER(user_email)'), 'like', `%${search_param.toLowerCase()}%`);
        });
}


async function remove(user_id){
    try{
        const resp = await removeHealthMetrics(user_id);
        return removeUserInformation(user_id);
    }catch(error){
        return error;
    }
}
function removeHealthMetrics(user_id){
    return knex('health_metrics')
    .where('person_id',user_id)
    .del();
}
function removeUserInformation(user_id){
   return knex('user_information')
    .where('user_id',user_id)
    .del();
}
module.exports= {
    listAll, 
    findUser,
    remove
}