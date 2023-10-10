import axios from "axios";
import useSWR from "swr";

//* Set Axios Base URL
const apiEndPoint = process.env.NEXT_PUBLIC_API_PATH;
axios.defaults.baseURL = apiEndPoint;

//* Fetcher Function
export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
