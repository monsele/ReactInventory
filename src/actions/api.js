import axios from "axios";

const baseUrl = "https://localhost:44314/api/";

// export default function apiCategory(url = baseUrl + "Category/") {
//   return {
//     fetchAll: () => axios.get(url),
//     fetchById: (id) => axios.get(url + id),
//     create: (category) => axios.post(url),
//     delete: (id) => axios.delete(url + id),
//     edit: (id, category) => axios.put(url + id, category),
//   };
// }
export default {
    apiCategory(url = baseUrl + "Category/") {
        return {
    fetchAll: () => axios.get(url),
    fetchById: (id) => axios.get(url + id),
    create: (category) => axios.post(url,category),
    delete: (id) => axios.delete(url + id),
    edit: (id, category) => axios.put(url + id, category),
        }
    }

}

