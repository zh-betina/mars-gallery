const saveToLocalStorage = (key, value)=>{
    localStorage.setItem(key,  JSON.stringify(value));
}

export default saveToLocalStorage;