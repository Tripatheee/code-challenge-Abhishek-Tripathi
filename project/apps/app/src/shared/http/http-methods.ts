import { AxiosRequestConfig } from "axios";
import axiosClient from "./http-client";

export const get = async (api: string, config?: AxiosRequestConfig) => {
    return await axiosClient.get(`${api}`, config).then((res) => res.data);
};
