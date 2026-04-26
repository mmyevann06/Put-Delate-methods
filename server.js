const express = require("express");
const app = express();

app.use(express.json());

let users = [
  {id:1, name:"Ali"},
  {id:2, name:"Leyla"}
];

app.get("/users", (req,res)=>{
  res.json(users);
});

app.put("/users/:id",(req,res)=>{
  const id = parseInt(req.params.id);
  const name = req.body.name;

  const user = users.find(u => u.id === id);
  if(user){
    user.name = name;
    res.send("User updated");
  } else {
    res.send("User not found");
  }
});

app.delete("/users/:id",(req,res)=>{
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);
  res.send("User deleted");
});

app.listen(3000, ()=>{
  console.log("Server running");
});