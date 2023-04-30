import chunli from "../assets/chunli.png";
import yun from "../assets/yun.png";
import ken from "../assets/ken.png";
import makoto from "../assets/makoto.png";
import yang from "../assets/yang.png";
import akuma from "../assets/akuma.png";
import dudley from "../assets/dudley.png";
import urien from "../assets/urien.png";
import ryu from "../assets/ryu.png";
import ibuki from "../assets/ibuki.png";
import oro from "../assets/oro.png";
import elena from "../assets/elena.png";
import necro from "../assets/necro.png";
import alex from "../assets/alex.png";
import remy from "../assets/remy.png";
import q from "../assets/q.png";
import hugo from "../assets/hugo.png";
import twelve from "../assets/twelve.png";
import sean from "../assets/sean.png";

export const charImgArr = [
  null,

  chunli,
  yun,
  ken,
  makoto,
  yang,
  akuma,
  dudley,
  urien,
  ryu,
  ibuki, //10
  oro,
  elena,
  necro,
  alex,
  remy,
  q,
  hugo,
  twelve,
  sean
];

export const charNameArr = [
  "Gill",

  "Chun-Li", //1
  "Yun", //2
  "Ken",
  "Makoto",
  "Yang",
  "Akuma",
  "Dudley",
  "Urien", //8
  "Ryu",
  "Ibuki",
  "Oro",
  "Elena",
  "Necro",
  "Alex",
  "Remy", //15
  "Q",
  "Hugo",
  "Twelve",
  "Sean"
];

export function CharacterPortrait({id}){
  console.log("id = " + id);
  return (
    <img src={charImgArr[id]} alt={charNameArr[id]}/>
  )
}
