const express = require("express");
const app = express();
const users = require("./User.json");
const fs = require("fs");

app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).send("Hello ");
//   res.send("world");
// });

// app.get("/user", (req, res) => {
//   res.status(200).json({ message: "Sucessfull" });
// });
// app.get("/user/:id", (req, res) => {
//   console.log(req.params);
//   console.log(req.query);
//   res.status(200).sendFile(__dirname + "/index.html");
// });

app.get("/users", (req, res) => {
  //const html = users.map((user) => `<li>${user.name}</li>`).join(" ");
  //   res.status(200).send(`
  //     <div>
  //       <ul>${html}</ul>
  //     </div>`);
  res.status(200).json(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  users.push(newUser);
  fs.writeFile("./User.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      return res.status(500).send("Error saving user");
    }

    res.status(200).json(newUser);
  });
});

app.put("/users/:id", async (req, res) => {
  const id = Number(req.params.id);

  const idx = users.findIndex((user) => user.id === id);

  if (idx === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const updatedUser = {
    id,
    ...req.body,
  };

  users[idx] = updatedUser;

  await fs.writeFile("./User.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      return res.status(500).send("Error saving user");
    }

    res.status(200).json(updatedUser);
  });
});

app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = users.findIndex((user) => user.id === id);
  const user = users[idx];
  if (idx === -1) {
    return res.status(400).send("User not available");
  }
  users.splice(idx, 1);
  console.log("deleted sucessfully");
  fs.writeFile("./User.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      return res.status(400).send("Unable to delete");
    }
    return res.status(200).json({ message: "sucessfully deleted", user });
  });
});

app.patch("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const idx = users.findIndex((user) => user.id === id);

  if (idx === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  users[idx] = {
    ...users[idx],
    ...req.body,
  };

  fs.writeFile("./User.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      return res.status(500).json({
        message: "Error updating user",
      });
    }

    res.status(200).json(users[idx]);
  });
});

app.listen(3000, () => {
  console.log("Server running sucessfully");
});
