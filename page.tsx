import React from 'react';
import Card from "./components/card"; // Ensure the path is correct

export default function Home() {
   return (
      <div className="flex flex-col items-center p-4">
         <Card name="Aliza" age={18} rollNo={39956} classDay="Monday" /> 
         <Card name="Tooba" age={19} rollNo={233545} classDay="Tuesday" /> 
         <Card name="Eraj" age={22} rollNo={235565} classDay="Saturday" />
      </div>
   );
}
