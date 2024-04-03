export const returndate = (date: string) => {
    console.log(date);
    return (
      new Date(date).toLocaleDateString("en-CA") +
      " " +
      new Date(date).toLocaleTimeString("en-CA")
    );
  };
  

  export const getIconColor = (messageStatus: string) => {
    return messageStatus === "NEW"
      ? "error"
      : messageStatus === "VIEWED"
      ? "success"
      : "secondary";
  };