import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/users/5';

interface userDetail {
  id: number;
  name: string;
  email: string;
}

axios.get(url).then((response) => {
  const data = response.data as userDetail;
  printLog(data.id, data.name, data.email);
});

const printLog = (id: number, name: string, email: string) => {
  console.log('Id: ' + id);
  console.log('Name: ' + name);
  console.log('Email ' + email);
};
