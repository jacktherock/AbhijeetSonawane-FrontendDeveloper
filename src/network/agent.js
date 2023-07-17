import axios from "axios"

export const getCapsules = () => {
    return axios
        .get("https://api.spacexdata.com/v3/capsules")
        .then(response => response.data)
        .catch(err => err);
}
