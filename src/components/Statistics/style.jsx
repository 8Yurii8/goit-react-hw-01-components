export const Statistics = { 
    
    width: "220px",
    borderRadius: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    backgroundColor: "aliceblue"
  };



  export const StatList = { 
    
    display: "flex",
 
  padding: "auto",
  margin: "auto"
  };


  export const ListItem = { 
    
    flexGrow: 1,
    display: "flex",
    gap: "5px",
    padding: "auto",
    margin: "auto",
    flexDirection: "column",
    color: "white"
  };
 
  export const generateRandomColor = () => {
    // Генеруємо випадковий колір у форматі HEX
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };