export default unixtime => {
  const d = new Date(unixtime * 1000);
  const today = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric"
  };

  if (d.getFullYear() !== today.getFullYear()) {
    options.year = "numeric";

    if (d.getMonth() !== today.getMonth()) {
      options.month = "long";

      if (d.getDay() !== today.getDay()) {
        options.day = "numeric";
      }
    }
  }

  return new Intl.DateTimeFormat("default", options).format(d);
};
