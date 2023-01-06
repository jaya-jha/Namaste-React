import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
<h1 id="title" key="h3">
    Namaste React
  </h1>
);


  
// javascript funtion which returns react element 
// component composition
const HeaderComponent = () =>
   (
     <div>
       <Title/>
       {Title()}  
       {console.log("any js code")}  
      <h1> Namaste React Funtional Component</h1>
      <h2>heading 2</h2>
    </div>
  );

 


const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent />);
