import { SERVER_URL } from "../../../common/constants";

export function fetchAllHerb() {
    return fetch(`${SERVER_URL}/MYSQLCHI/herb/Allherb.php`)
        .then(response => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => {
            console.error(error);
        });
}


