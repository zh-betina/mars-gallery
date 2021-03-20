const fetchData = async(data, url, method) => {
    const response = await fetch(url, {
        method: method,
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    try{
        const data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}

export default fetchData;