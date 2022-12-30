import React, { useState } from "react";
import artists from "./Artists";
import news from './News'


 function Awards(){

const AwardChartUpdate=setInterval(AwardChart, 232000)
const [setAwardChart, newAwardChart]= useState('')
   function AwardChart(){
    let check=artists.sort((a, b) => {
        
        return b.totalStreams - a.totalStreams;
        
    });

    
    const nominate=[]
    

 
  artists.forEach((x,i) =>{
    x.totalStreams=0;

    if (i>10){
        const m=x.songs;
        m.forEach((u)=>{
            m.unshift(u);
        })
        
    }
    const m=x.songs;
    m.forEach((u)=>{
        nominate.push(u);
    })
})

const SotY=nominate.sort((a, b) => {
        return b.totalStream - a.totalStream;
        
    });
    
        const findParent=artists.findIndex((obj)=>{
            return obj.name===SotY[0].author
        })
      artists[findParent].lAwards+=1
 
const bestSongWinner=artists[findParent]

    artists[2].Awards=artists[2].vAwards+1;
    
    artists.forEach((e, i) => {
        e.rank=i+1;
        e.Age=e.Age+1;
        if(e.Age>55){
            artists.pop(e)
        }
        
    });
    clearInterval(AwardChartUpdate)
    
    artists[0].Awards=artists[0].Awards+1;

    artists[2].vAwards=artists[2].vAwards+1;

   const SotYName=SotY[0].title

   const aa0= "  " +artists[0].name;
   const aaa0= "  " +artists[0].Awards; 
    const aa1= "  " +bestSongWinner.name; 
    const aaa1= "  " +artists[findParent].lAwards;
   const aa2= "  " +artists[2].name;
   const aaa2= "  " +artists[2].vAwards; 
   const aa3= "  " +artists[3].name; 
   const aaa3= "  " +artists[3].Awards;
   const aa4= "  " +artists[4].name; 
   const aaa4= "  " +artists[4].Awards;

  
  

    newAwardChart([aa0,aaa0,aaa1,aa1,aaa2,aa2,aaa3,aa3,aaa4,aa4,SotYName])
}
return(
    <div className="awardChart">
    <div className="awardName">
        <p>{setAwardChart[0]} (x<span className="totalAwards">{setAwardChart[1]}</span>)</p>
        <hr/>
        <p>{setAwardChart[3]} (x<span className="totalAwards">{setAwardChart[2]}</span>)</p>
        <hr/>
        <p>{setAwardChart[5]} (x<span className="totalAwards">{setAwardChart[4]}</span>)</p>
        <hr/>
    </div>
    <div><h2> Yearly Awards</h2></div>
    <div>
        <p><span className="rankNo">1</span> Artiste Of The Year  </p>
    </div>
    <hr/>
    <div>
        <p><span className="rankNo">2</span> Song Of The Year  [{setAwardChart[10]}]</p>
    </div>
    <hr/>
    <div>
        <p><span className="rankNo">3</span>Viewers Choice  </p>
    </div>
    <hr/>

    </div>
)
 }


export default Awards