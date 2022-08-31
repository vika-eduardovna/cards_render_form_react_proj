import Form from "./Form";
import Cardslist from "./Cardslist";
import { users } from '../data/users'
import { useState } from "react";


function App() {
  const [newUsers, setNewUsers] = useState(users)

  const addUser = (first_name, last_name) => setNewUsers([
    ...newUsers,
    {
      id: Date.now(),
      first_name,
      last_name,
      avatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AASQZrk.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=490&y=384"
    }
  ]);

  const removeUser = id => setNewUsers(newUsers.filter(elem => elem.id !== id));

  return (
    <div>
      <Form add={addUser} />
      <Cardslist users={newUsers} remove={removeUser} />
      
    </div>
  );
}

export default App;
