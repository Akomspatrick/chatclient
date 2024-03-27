export const returndate = (date: string) => {
    console.log(date);
    return (
      new Date(date).toLocaleDateString("en-CA") +
      " " +
      new Date(date).toLocaleTimeString("en-CA")
    );
  };
  