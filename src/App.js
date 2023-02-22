import logo from './logo.svg';
import './App.css';
import FunctionalComp from './Component/FucntionalComp';
import ClassComp from './Component/ClassComp';
import { FirstComp } from './Component/FirstComp';
import { Count } from './Component/Count';
import { Copycounter } from './Component/Copycounter';
import { Greet } from './Component/Greet';
import { CarComp } from './Component/CarComp';
import { UseRefExample } from './Componets/UseRefExample';
import { Copy } from './Componets/Copy';
import { Copy2 } from './Componets/Copy2';


function App() {
  // const fname="sufiyan";
  // const SecondName1="bardolia"
  // const Three="Memon Steet"

  // const iname="ibrahim";
  // const SecondName2="dungariwala"
  // const Three2="visarwadi"

  // const yname="yusuf";
  // const SecondName3="mullah"
  // const Three3="chichpada"

  // const kname="khuzi"
  // const SecondName4="shaikh"
  // const Three4="navapur"

  const car1="fortuner"
  const Model2="New Adition"
  const Color3="white"
  const tyre4="4"

  const Car3="ertiga"
  const Model3=" Adition"
  const Color2="black"
  const tyre3="4"
  return (
    <div className="App">
  {/* <FunctionalComp/>
  <ClassComp/> */}
  {/* <FirstComp/> */}
  {/* <Count/> */}
  {/* <Copycounter/> */}
  {/* <Greet firstName={fname} name2={SecondName1}  name3={Three}/>
  <Greet firstName={iname} name2={SecondName2}  name3={Three2}/>
  <Greet firstName={yname} name2={SecondName3}  name3={Three3}/>
  <Greet firstName={kname} name2={SecondName4}  name3={Three4}/> */}
  {/* <CarComp  Car={car1} Car1={Model2} Car2={Color3} Car3={tyre4}/>  <br/>
  <CarComp  Car={Car3} Car1={Model3} Car2={Color2} Car3={tyre3}/> */}

  {/* <UseRefExample/> */}
  {/* <Copy/> */}
  <Copy2/>
 
    </div>
  );
}

export default App;
