import axios from "axios";
import {authConfig} from "../../Helpers/authHeader";

export const AdminService = {
    getUsers,
};

async function getUsers() {
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/admin/users`, authConfig())
    return result.data;
}






