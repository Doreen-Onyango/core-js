function firstDayWeek(week, year) {
    const parsedYear = parseInt(year, 10);
    week = Math.max(1, Math.min(53, week));
    
    function createDate(year, month, day) {
      const date = new Date(year, month, day);
      if (year < 100) {
        date.setFullYear(year);
      }
      return date;
    }
    let time = createDate(parsedYear, 0, 1);
  
    if (week === 1) {
      return formattedDate(time);
    }
    let dayPlus = (week - 1) * 7;
    time.setDate(time.getDate() + dayPlus);
  
    while (getWeekDay(time) !== 'Monday') {
      time.setDate(time.getDate() - 1);
    }
  
    if (time.getFullYear() < parsedYear) {
      return formattedDate(createDate(parsedYear, 0, 1));
    }
  
    return formattedDate(time);
  }
  
  function getWeekDay(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }
  
  function formattedDate(d) {
    let month = String(d.getMonth() + 1).padStart(2, '0');
    let day = String(d.getDate()).padStart(2, '0');
    let year = String(d.getFullYear()).padStart(4, '0');
    return `${day}-${month}-${year}`;
  }
  
  console.log(firstDayWeek(41, 2024));
