
import React, { useState }  from "react";


let datenum=1;
let day='Mon';
let week=1;
let month='Jan'
let year=2010
function Date (){


const dates=setInterval(days,700)
const [setDate,newDate]=useState('')


    function days(){
       
        if (datenum===1){
        day='Mon'
         datenum++;
        }else if(datenum===2){
    day='Tue'
     datenum++;
        }else if(datenum===3){
    day='Wed'
     datenum++;
        }else if(datenum===4){
    day='Thur'
     datenum++;
        }else if(datenum===5){
    day='Fri'
     datenum++;
        }else if(datenum===6){
    day='Sat'
     datenum++;
        }else if(datenum===7){
    day='Sun'
    week++
    datenum=1
  
    
    if (week===54){
        week=1
    } else if (week >= 4 && week <= 8){
        month='Jan'
    }else if (week >= 9 && week <= 12){
        month='Feb'
    }else if (week >= 11 && week <= 16){
        month='Mar'
    }else if (week >= 17 && week <= 20){
        month='Apr'
    }else if (week >= 21 && week <= 24){
        month='May'
    }else if (week >= 25 && week <= 28){
        month='Jun'
    }else if (week >= 29 && week <= 32){
        month='Jul'
    }else if (week >= 33 && week <= 36){
        month='Aug'
    }else if (week >= 37 && week <= 40){
        month='Sep'
    }else if (week >= 41 && week <= 44){
        month='Oct'
    }else if (week >= 45 && week <= 48){
        month='Nov'
    }else if (week >= 49 && week <= 52){
        month='Dec';
   
    }else if(week===53){
        month='Jan'
        year+=1;
    }
 
        }
    
        
        newDate([day,month,year])
        const jon=setDate[0]

        clearInterval(dates)
       
           }

           return (
            <span className="date">{setDate[0]}-{setDate[1]}-{setDate[2]}</span>)
        }
           
        
        export default Date