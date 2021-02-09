export const parseCohortStr = (cohort) => {
    const { name, startDate: start } = cohort;
    const cohortName = name.slice(0, name.search("Bootcamp")) + " Bootcamp";
    const [duration] = /[0-9] (Month|Week)/i.exec(name);
    const [fullOrPartTime] = /Full time|Part time/i.exec(name);
    const startDate = parseDateStr(start);
    return { cohortName, duration, fullOrPartTime, startDate };
}

export function parseDateStr(str){
  const str2 = new Date(str).toString()
  const fullMonthNames = ["January", "February", "March", "April", 
    "May", "June", "July", "August", "September", "October", "December"];
  const [, month, day, year] = /(\w{3}) (\d{2}|\d{1}) (\d{4})/.exec(str2);
  const fullMonth = fullMonthNames.filter(mo => mo.includes(month));
  const startDate = `${fullMonth} ${day}, ${year}`;
  return startDate;
}