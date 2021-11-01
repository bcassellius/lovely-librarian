const db = require("./connection");
const { User, Staff } = require("../models");

db.once("open", async () => {
  await Staff.deleteMany();

  await Staff.insertMany([
    {
      firstName: "Someone",
      lastName: "Special",
      email: "someone@email.com",
      title: "supervisor",
      extension: "10",
      office: "234",
    },
    {
      firstName: "Noone",
      lastName: "Special",
      email: "noone@email.com",
      title: "tech specialist",
      extension: "20",
      office: "235",
    },
    {
      firstName: "Penny",
      lastName: "Coin",
      email: "penny@email.com",
      title: "maintenence",
      extension: "30",
      office: "236",
    },
    {
      firstName: "Twoe",
      lastName: "Quarter",
      email: "twoe@email.com",
      title: "book repair",
      extension: "32",
      office: "236",
    },
    {
      firstName: "Fitty",
      lastName: "Cent",
      email: "fitty@email.com",
      title: "custodian",
      extension: "34",
      office: "236",
    },
    {
      firstName: "Dollar",
      lastName: "Bill",
      email: "dollar@email.com",
      title: "librarian",
      extension: "40",
      office: "237",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@email.com",
      title: "librarian",
      extension: "42",
      office: "237",
    },
    {
      firstName: "Johnny",
      lastName: "House",
      email: "johnny@email.com",
      title: "librarian",
      extension: "44",
      office: "237",
    },
    {
      firstName: "Suzie",
      lastName: "Que",
      email: "suzie@email.com",
      title: "librarian",
      extension: "46",
      office: "237",
    },
    {
      firstName: "Jess",
      lastName: "Eat",
      email: "jess@email.com",
      title: "event coordinator",
      extension: "48",
      office: "237",
    },
    {
      firstName: "Jimmy",
      lastName: "Jones",
      email: "jimmy@email.com",
      title: "volunteer",
    },
    {
      firstName: "Jenny",
      lastName: "Jones",
      email: "jenny@email.com",
      title: "volunteer",
    },
    {
      firstName: "Spot",
      lastName: "Jones",
      email: "jenny1@email.com",
      title: "dog companion",
    },
    {
      firstName: "Emmy",
      lastName: "Jones",
      email: "emmy@email.com",
      title: "volunteer shelver",
    },
    {
      firstName: "Edgar",
      lastName: "Jones",
      email: "edgar@email.com",
      title: "volunteer shelver",
    },
  ]);

  console.log("staff seeded");

  await User.deleteMany();

  await User.insertMany([
    {
      firstName: "Someone",
      lastName: "Special",
      email: "someone@email.com",
      password: "123456789",
      username: "1",
    },
    {
      firstName: "Noone",
      lastName: "Special",
      email: "noone@email.com",
      password: "123456789",
      username: "2",
    },
    {
      firstName: "Penny",
      lastName: "Coin",
      email: "penny@email.com",
      password: "123456789",
      username: "3",
    },
    {
      firstName: "Twoe",
      lastName: "Quarter",
      email: "twoe@email.com",
      password: "123456789",
      username: "4",
    },
    {
      firstName: "Fitty",
      lastName: "Cent",
      email: "fitty@email.com",
      password: "123456789",
      username: "5",
    },
    {
      firstName: "Dollar",
      lastName: "Bill",
      email: "dollar@email.com",
      password: "123456789",
      username: "6",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@email.com",
      password: "123456789",
      username: "7",
    },
    {
      firstName: "Johnny",
      lastName: "House",
      email: "johnny@email.com",
      password: "123456789",
      username: "8",
    },
    {
      firstName: "Suzie",
      lastName: "Que",
      email: "suzie@email.com",
      password: "123456789",
      username: "9",
    },
    {
      firstName: "Jess",
      lastName: "Eat",
      email: "jess@email.com",
      password: "123456789",
      username: "10",
    },
  ]);

  console.log("users seeded");

  process.exit();
});
