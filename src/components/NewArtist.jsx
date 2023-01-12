import React from "react";
import whichFormat from "./songNames";
import artists from "./Artists";
import { uniqueNamesGenerator,Config,colors,names } from "unique-names-generator"
import realNames from "./realNames";


const nameGenC=[
  'B','C','D','F','G','H','J','K','L','Z','St','Ch' ,'C','V','B','N','M','W','R','T','Y','P'
]
const nameGenD=[
  'a','e','i','o','u'
]
const mName=[
  '','','b','c','d','e' ,'f','g','h','i','j','l','z','c','v','o','n','m','qu','w','r','t','y','u','p','s'
]
const end=[
  'li','ana','ton','ter','man','la','er','win','ly','cky','son','beth','a','e','i','o','u','lim',' ','nan','os','an','ner','de','gan','ke'
]





setInterval(NewName,980)
function NewName(){

  function NewName(x){
    const r1=nameGenC[Math.floor(Math.random()*nameGenC.length)]+nameGenD[Math.floor(Math.random()*nameGenD.length)]+mName[Math.floor(Math.random()*mName.length)]+end[Math.floor(Math.random()*end.length)]
    return r1
   }
   const config = {
    dictionaries: [names]
  }
  
  const characterName = uniqueNamesGenerator(config);
const fname=NewName()
const surname=NewName()
const surnameSellector= [" "+fname,'','']
  const nameIn=characterName +surnameSellector[Math.floor(Math.random()*surnameSellector.length)]


  function modernPerson(name,no1s,yearlyFans, fans, Awards ,lAwards,vAwards,songs,age,totalStreams){
    this.name=name;
    this.no1s=no1s;
    this.yearlyFans=yearlyFans;
    this.fans=fans;
    this.Awards=Awards;
    this.lAwards=lAwards;
    this.vAwards=vAwards;
    this.songs=songs;
    this.age=age;
    this.totalStreams=totalStreams;

  }
  function id(){
    return Math.random(Math.floor()*5000)
  }
  function song(title,author,feature1,feature2,totalStream,thisWeek,lag,musicVideo,status,prevRank,newRank,authorIndex,rating,support,lastWeekStatus,thisWeekStatus,peak,woc,id){
    this.title=title;
    this.author=author;
    this.woc=woc;
    this.feature1=feature1;
    this.feature2=feature2;
    this.totalStream=totalStream;
    this.thisWeek=thisWeek;
    this.lag=lag;
    this.musicVideo=musicVideo;
    this.status=status;
    this.prevRank=prevRank;
    this.newRank=newRank;
    this.peak=peak;
    this.authorIndex=authorIndex;
    this.rating=rating;
    this.support=support;
    this.id=id;
    this.thisWeekStatus=thisWeekStatus;
    this.lastWeekStatus=lastWeekStatus;
    this.calcTotalStreams=function(){
      this.totalStream+=this.thisWeek};
      this.weeklyStream=function(){
       this.thisWeek=(this.lag/100)* (Math.floor(Math.random()*(10/100*rating)+rating));
    this.lag-=2;
  }
  
  }


function newTitle(){

const newTitles= whichFormat[Math.floor(Math.random()*whichFormat.length)]

return newTitles()
}




while (artists.length<50) {

  function nameo(){

    return realNames.shift()
  }

  const nameIn=characterName +surnameSellector[Math.floor(Math.random()*surnameSellector.length)]
  const newAge=Math.floor(Math.random()*30+15)
  let modern=new modernPerson(nameo(),0,0,0,0,0,0,[],newAge,0)
  const rating=Math.floor(Math.random()*1000)
  const support=rating/2
  const aI=artists.length
  const newTitles= whichFormat[Math.floor(Math.random()*whichFormat.length)]()
  let newSong=new song (newTitles,modern.name,null,null,0,0,100,0,'🟢','-',0,aI,rating,support,11,11,'-',0,id())
  modern.songs.push(newSong)
  artists.push(modern) 

}

}


export default NewName