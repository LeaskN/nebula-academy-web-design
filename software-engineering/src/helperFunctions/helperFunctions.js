    /* 
      Takes in a single cohort object from salesforce 
      (from an array of cohorts) 
    */
export const parseCohortStr = (cohort) => {
    // Destructuring - cohort.name & cohort.startDate (note: startDate is being assigned to start)
    const { name, startDate: start } = cohort;
    /* 
      Get the name of our cohort ie: V1 Tech Skills
      then we are concatenating that with "Bootcamp" 
    */
    const cohortName = name.slice(0, name.toLowerCase().search("bootcamp")) + " Bootcamp";
    // Searching for ie: 3 Months OR 3 Month OR 12 Weeks... etc
    const [duration] = /[0-9]* (Months|Month|Weeks|Week)/i.exec(name);
    // Searching for ie: Full time...
    const [fullOrPartTime] = /Full time|Part time/i.exec(name);
    // Using parseDateStr() to find start date...
    const startDate = parseDateStr(start);
    return { cohortName, duration, fullOrPartTime, startDate };
}

// Takes in a date string: yyyy-mm-dd
export function parseDateStr(str){
  // Creating a new format ie: Thu Jun 10 2021 20:00:00 GMT-0400 (Eastern Daylight Time)
  const str2 = new Date(str).toString();
  const fullMonthNames = ["January", "February", "March", "April", 
    "May", "June", "July", "August", "September", "October", "December"];
  // Splits str2 into their respective elements ie: "...", "Aug", "13", "2021"
  const [, month, day, year] = /(\w{3}) (\d{2}|\d{1}) (\d{4})/.exec(str2);
  // Here we are checking which month we've returned above ie: return "August" b/c it contains "Aug"
  const fullMonth = fullMonthNames.filter(mo => mo.includes(month));
  // Formatting our start date string...
  const startDate = `${fullMonth} ${Number(day)+1}, ${year}`;
  return startDate;
}