import 'bootstrap';
import { Users, Data } from './api';
import '../scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});
$('#loginForm').submit(false);
$('#loginButton').on('click', () => {
  let credential = {
    username: $('#username').val(),
    password: $('#password').val(),
  };
  Users.login(credential);
});
// Your jQuery code
