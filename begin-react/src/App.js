import React, { useRef, useState } from 'react'; 
// import UserList from './UserList';
import CreateUser from './CreateUser';
import UserList3 from './UserList3';

//import InputSample2 from './InputSample2';
// import InputSample3 from './InputSample3';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
// import Counter from './Counter';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active : true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active : false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active : false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  
  const onRemove = id =>{
    setUsers(users.filter(user => user.id !== id));
  }
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList3 users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;