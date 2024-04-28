import axios from 'axios';
import { url } from './constants';

export async function userLogout() {
    await axios.delete(`${url}auth`);
}
