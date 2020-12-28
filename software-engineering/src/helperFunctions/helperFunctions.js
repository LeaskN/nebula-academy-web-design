export const formatDateString = (date, comma) => {
    try {
      const reg = /\w{3} \d* \d{4}/i;
      const iOSsafe = `${new Date((date + " 00:00:00 EST").replace(/-/g, '/'))}`
      const [rawDate] = reg.exec(iOSsafe);
      return comma ? `${rawDate.split(" ")[0]}, ${rawDate.split(" ").slice(1).join(" ")}` : rawDate;
    } catch (e){
      console.log(e, " error in formatDateString")
      return "Dates pending..."
    }
  }