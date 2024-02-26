import { useEffect, useState } from "react";


function App() {
  const [typeOfColor,setTypeOfColor]=useState("hex")
const [color,setColor]=useState(['#000000'])
const handleCreateRandomhexColor=()=>{
  const hexa=[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F']
  let hexcode='#';
  for(let i=0;i<6;i++){
    hexcode +=hexa[Math.floor(Math.random()*hexa.length)]
  }
  console.log(hexcode)
  setColor([hexcode])
}
const handleCreateRandomrgbColor=()=>{
  const r=Math.floor(Math.random()*256)
  const g=Math.floor(Math.random()*256)
  const b=Math.floor(Math.random()*256)
  console.log(`rgb${r},${g},${b}`)
  setColor(`rgb(${r},${g},${b})`)

}
useEffect(()=>{
   if (typeOfColor==="hex") handleCreateRandomhexColor();
  else if (typeOfColor==="rgb") handleCreateRandomrgbColor();},[typeOfColor]
)
  return (
   
    <div className="back" style={{backgroundColor:`${color}`}}>
      <div className="d">
    <button onClick={()=>setTypeOfColor('hex')} className="button" >Create HEX Color</button>
    <button onClick={()=>setTypeOfColor('rgb')} className="button" >Create RGB Color</button>
    <button onClick={typeOfColor==='hex'?(handleCreateRandomhexColor):(handleCreateRandomrgbColor)} className="button" >Generate Random Color</button>
    </div>
    <div className="textdes">
    <h1>{typeOfColor==="hex"?"HEX":"RGB"}</h1>
    <h1>{color}</h1>
    </div>
</div>
  );
}

export default App;
