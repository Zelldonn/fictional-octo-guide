export const URL = process.env.BASE_URL || 'http://localhost';
export const PORT = process.env.PORT || 8888;
export const API_VERSION = process.env.API_VERSION || "/api/v1"


async function add(mac_address, description) {
    const options = {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "mac_address": mac_address,
            "description": description
          })
    }
    console.log(options.body)
    await fetch(`${URL}:${PORT}${API_VERSION}/device`,options)
            .then(response => response.json())
            .then(data => console.log(data));
  }

export const addDevice = (mac_address, description) =>{
    add(mac_address, description) 
}

export default addDevice