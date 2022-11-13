import interceptor from "./interceptors";
import axios from "axios";
const authAxios = interceptor(axios.create());
export default authAxios;