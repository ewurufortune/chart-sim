import React, { useState } from "react";
import artists from "./Artists";
import TopRanker from "./Chart";

 function AllTimer(){

const ChartUpdateAll=setInterval(AllChart, 4900)
const [setChartAll, newChartAll]= useState('')
   function AllChart(){
    artists.sort((a, b) => {
     
        return b.no1s - a.no1s;
        
    });

  
    clearInterval(ChartUpdateAll) 
   const a0= "  " +artists[0].name; 
  
   const aa0= "  " +artists[0].no1s; 
  
   const p0= "  " +artists[0].Awards; 
   const aae0= "  " +artists[0].lAwards; 
   const aaea0= "  " +artists[0].vAwards; 

   const a1= "  " +artists[1].name;
   const aa1= "  " +artists[1].no1s; 
   const p1= "  " +artists[1].Awards;  
   const aae1= "  " +artists[1].lAwards;
   const aaea1= "  " +artists[1].vAwards; 
 

   const a2= "  " +artists[2].name; 
   const aa2= "  " +artists[2].no1s;
   const p2= "  " +artists[2].Awards; 
   const aae2= "  " +artists[2].lAwards;
   const aaea2= "  " +artists[2].vAwards;
   
   const a3= "  " +artists[3].name; 
   const aa3= "  " +artists[3].no1s; 
   const p3= "  " +artists[3].Awards; 
   const aae3= "  " +artists[3].lAwards;
   const aaea3= "  " +artists[3].vAwards;

   const a4= "  " +artists[4].name; 
   const aa4= "  " +artists[4].no1s;
   const p4= "  " +artists[4].Awards;  
   const aae4= "  " +artists[4].lAwards;
   const aaea4= "  " +artists[4].vAwards;


   
  

    newChartAll([a0,aa0,a1,aa1,a2,aa2,a3,aa3,a4,aa4,aae0,aae1,aae2,aae3,aae4,aaea0,aaea1,aaea2,aaea3,aaea4,p0,p1,p2,p3,p4])
}
return(
    <div className="allChart">
    <div><h2> The All-Time Chart</h2></div>
    <div>
        <p><span className="rankNo">1</span>{setChartAll[0]}  {setChartAll[1]}   <span className="otherAwards">     ({setChartAll[20]})  ({setChartAll[10]})  ({setChartAll[15]})</span>  </p>
    </div>
    <div>
        <p><span className="rankNo">2</span>{setChartAll[2]}   {setChartAll[3]}   <span  className="otherAwards">     ({setChartAll[21]})  ({setChartAll[11]})  ({setChartAll[16]})</span></p>
    </div>
    <div>
        <p><span className="rankNo">3</span>{setChartAll[4]}   {setChartAll[5]}   <span className="otherAwards">     ({setChartAll[22]})  ({setChartAll[12]})  ({setChartAll[17]})</span></p>
    </div>
    <div >
        <p><span className="rankNo">4</span>{setChartAll[6]}   {setChartAll[7]}   <span className="otherAwards">     ({setChartAll[23]})  ({setChartAll[13]})  ({setChartAll[18]})</span></p>
    </div>
    <div className="bottomElement">
        <p><span className="rankNo">5</span>{setChartAll[8]}   {setChartAll[9]}   <span className="otherAwards">     ({setChartAll[24]})  ({setChartAll[14]})  ({setChartAll[19]})</span></p>
    </div>
    </div>
)
 }


export default AllTimer