const users = [
    {
      id: 1,
      name: "Marie Curie",
      email: "marie.curie@email.com"
    },
    {
      id: 2,
      name: "Wonder Woman",
      email: "wonder.woman@email.com"
    },
    {
      id: 3,
      name: "Katherine Johnson",
      email: "katherine.johnson@email.com"
    },
    {
      id: 4,
      name: "Jane Goodall",
      email: "jane.goodall@email.com"
    },
    {
      id: 5,
      name: "Faith Ringold",
      email: "faith.ringold@email.com"
    },
    {
      id: 6,
      name: "Simone Biles",
      email: "simone.biles@email.com"
    }
  ];
  
  const registeredUsers = [
    { id: 1, name: "Marie Curie" },
    { id: 2, name: "Wonder Woman" },
    { id: 3, name: "Katherine Johnson" }
  ];
  
  const newPosting = {
    id: null,
    title: "",
    description: "",
    city: "",
    state: "",
    neighorhood: "",
    contactName: "",
    userId: ""
  };
  
  // Using CommonJS style export so we can consume via Node (without using Babel-node)
  module.exports = {
    users,
    registeredUsers,
    newPosting
  };
  