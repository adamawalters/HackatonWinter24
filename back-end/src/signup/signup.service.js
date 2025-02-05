const knex = require("../db/connection");

function create(newUser) {
  return knex("user_information")
    .insert(newUser)
    .returning("*")
    .then((createdUser) => createdUser[0]);
}
function isEmailNotExists(email) {
  return knex("user_information").select("*").where({ user_email: email });
}
function update(data) {
  return knex("user_information")
    .where({ user_id: data.user_id })
    .update(data, [
      "user_dob",
      "user_gender",
      "user_occupation",
      "user_company",
      "user_weight",
      "user_height",
    ]);
}

function add(data) {
  return knex("user_information")
    .where({ user_id: data.user_id })
    .update(data, [
      "user_scheduled_time",
    ]);
}

function getInfoAndTime(user_id){
  return knex('user_information')
  .select("user_id", 
  "user_scheduled_time",
  "user_dob",
  "user_gender",
  "user_occupation",
  "user_company",
  "user_weight",
  "user_height",)
  .where('user_id',user_id)
}




module.exports = {
  getInfoAndTime,
  add,
  create,
  isEmailNotExists,
  update,
};