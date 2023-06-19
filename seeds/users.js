/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      user_name: "Nester Brookfield",
      email: "nbrookfield0@feedburner.com",
      password: "qweasdzxc",
    },
    {
      id: 2,
      user_name: "Esme Ayscough",
      email: "eayscough1@pagesperso-orange.fr",
      password: "12345678",
    },
    {
      id: 3,
      user_name: "Danni McOnie",
      email: "dmconie2@netscape.com",
      password: "password",
    },
    {
      id: 4,
      user_name: "Horatia Dalyiel",
      email: "hdalyiel3@fc2.com",
      password: "1q2w3e4r",
    },
    {
      id: 5,
      user_name: "Mohandis Nibley",
      email: "mnibley4@marketwatch.com",
      password: "123123123",
    },
  ]);
};
