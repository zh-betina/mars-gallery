const daysToFetch = (nbOfDays) => {
  const currentDate = new Date();
  const days = {};
  for (let i = 1; i <= nbOfDays; i++) {
    const date = new Date(currentDate.setDate(currentDate.getDate() - 1));
    days[i] = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear()
    };
  }
  return days;
};

export default daysToFetch;
