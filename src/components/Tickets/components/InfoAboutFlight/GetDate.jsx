import dayjs from "dayjs";
import "dayjs/locale/ru";
import localizedFormat from "dayjs/plugin/localizedFormat";

export  function GetDate({date}) {
  dayjs.extend(localizedFormat);
  let normalDate = date.split(".");
    
  // fixed a bug from dayjs for IE
  if (normalDate[2].length == 2) {
    normalDate[2] = '20' + normalDate[2];
  } 

  normalDate.splice(0, 2, normalDate[1], normalDate[0]);
  let formatDate = dayjs(normalDate.join("/"))
      .locale("ru")
      .format("D MMM YYYY, dd");

  return (
    <p>
      {formatDate}
    </p>
  );
}