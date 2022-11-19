import interceptor from "./interceptors";
import axios from "axios";
const customAxios = interceptor(axios.create());
export default customAxios;
