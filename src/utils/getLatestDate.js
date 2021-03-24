const getLatestDate = () => {
  const now = new Date();
  const dayBefore = new Date(now.setDate(now.getDate() - 1));
  const today = {
    day: dayBefore.getDate() - 1,
    month: dayBefore.getMonth() + 1,
    year: dayBefore.getFullYear()
  };
  return today;
};

export default getLatestDate;

// probably to be thrown out
