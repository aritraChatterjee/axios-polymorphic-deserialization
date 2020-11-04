import axios from 'axios';
import { ObjectMapper } from 'jackson-js';
import User from './src/User';

const url = 'http://localhost:8080/users';

axios.get(url).then((response) => {
  const objectMapper = new ObjectMapper();
  console.log(response.data);
  const users = objectMapper.parse<Array<User>>(response.data, { mainCreator: () => [Array, [User]] });
  console.log(users);
});
