const getDate = ()=> { 
    const now = new Date();
    const today = {
        day: now.getDate() - 1,
        month: now.getMonth() + 1,
        year: now.getFullYear()
    }
    return today;
}

export default getDate;