const daysToFetch = () => {
    let currentDate = new Date();
    let days = {};
    let noOfDays = 7;

    for(let i = 1; i <= noOfDays; i++){
            const date = new Date(currentDate.setDate(currentDate.getDate() - 1));
            days[i] = {
                day: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear()
            }
        }
    return days;
}

export default daysToFetch;