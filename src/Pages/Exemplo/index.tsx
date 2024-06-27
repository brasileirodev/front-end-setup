import { Flex, Text, Button } from '@radix-ui/themes';
import React from 'react';
import { observer } from 'mobx-react-lite';
import DialogDemo from '../../components/Dialog';
import sessionStore from '../../store/store';

const Exemplo: React.FC = observer(() => {
  const fetchUser = async () => {
    try {
      const response = await fetch('https://example.com/user');
      const data = await response.json();
      alert(`User: ${data.firstName} ${data.lastName}`);
    } catch (error) {
      alert('Failed to fetch user data');
    }
  };

  return (
    <Flex
      direction="column"
      gap="2"
      width="40rem"
      className="flex flex-1"
    >
      <Text>Hello from Radix Themes :)</Text>
      <Button className="bg-red-400 w-full">Let's go</Button>
      <button
        className="flex bg-red-400 w-fit h-fit p-4 rounded-md text-white font-bold text-lg hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
        color="#ff08f3"
      >
        Normal button
      </button>
      <DialogDemo />
      <div className="flex gap-3">
        <button
          onClick={() => sessionStore.login()}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Login
        </button>
        <button
          onClick={() => sessionStore.logout()}
          className="bg-red-500 text-white p-2 rounded-md"
        >
          Logout
        </button>
        <h1>{sessionStore.logged ? 'Logado' : 'Deslogado'}</h1>
      </div>
      <button
        onClick={fetchUser}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Fetch User
      </button>
    </Flex>
  );
});

export default Exemplo;
