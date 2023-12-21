import React, { useState } from 'react'
import { GlobalStyle } from './assets/styles/GlobalStyles';
import styled from 'styled-components';
import Map from './components/organisms/Map/Map'
import HeaderBg from './components/organisms/HeaderBG/HeaderBg';

const Wrapp = styled.div` 
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100vh;
`

 export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number => number + 1);
        setNumber(number => number + 1);
        setNumber(number => number + 1);
      }}>Increment</button>
    </>
  )
 }
  // const [details, setDetails] = useState({
  //   ip: '', 
  //   city: '', 
  //   country_code: '', 
  //   postal: '',
  //   UTC: '',
  //   ISP: '',
  //   latitude: '',
  //   longitude: ''
  // });
  
  // const handleSetDetails = (det)=>{
  //   setDetails(det)
  // }
  // return (
  //   <Wrapp>
  //     <GlobalStyle/>  
  //     <HeaderBg 
  //       handleSetDetails={handleSetDetails}
  //       details={details}
  //       />
  //     <Map details={details}/>
  //   </Wrapp>
  // );
//}


////////////////////////////////////////
Rozwiązania 
// Zad 1
const tab1 = ["1a", "02", "b", "1", "2", "g3", "BB", "7"]
const tab2 = ["11", "w2", "G", "Q2", "7", "g3", "7", "0"]

// połącz, zostaw inty, usun duplikaty

const tab3 = [...tab1, ...tab2]
let tab4 = []

tab3.map(el=>{
    const currentEl = +el 
    if(currentEl && !tab4.includes(currentEl)) {
        tab4.push(+el)  
    }
})
console.log(tab4)

// // Zad 2
// // napisz funkcję która usunie z podanego ciągu znaków pozycję o określonym indeksie,
// // np. removeCharacter(string, position)
const removeCharacter = (string, position) => {
  let text = '';
  for(let i=0; i < string.length; i++){
    if(i===position) continue
    text+= string[i]
  }
  return text
}
console.log(removeCharacter("Ala ma kota", 1))

// Zad 3
// // Znajdź bug (number ma wynieść 3):
// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number => number + 1);
//         setNumber(number => number + 1);
//         setNumber(number => number + 1);
//       }}>Increment</button>
//     </>
//   )
// }


// // Zad 4
// // Napisz funkcję transformującą ze sturctury
// // [{ id: '123', tokenId: '345' }, { id: '123', tokenId: '777'}, { id: '13', tokenId: '5' }, { id: '13', tokenId: '5'}]

// // na strukturę
// // [{ id: 123, tokenIds: ['345', '777'], tokensCount: 2 }, { id: 13, tokenIds: ['5'], tokensCount: 1 }]

const editStruct = (Arr) => {
  let Arr2 = [];
  Arr.forEach(el=>{
    if(Arr2.find(Arr2El=> Arr2El.id === el.id)){
      const i = Arr2.findIndex(Arr2El=> Arr2El.id === el.id)
      if(!Arr2[i].tokenIds.includes(el.tokenId)){
        Arr2[i].tokenIds.push(el.tokenId)
        Arr2[i].tokensCount++
      }
    }
    else{
      const obiect = {
        id: el.id,
        tokenIds : [el.tokenId],
        tokensCount: 1
      }
      Arr2.push(obiect)
    }
  })
  return Arr2
}
const struct = [{ id: '123', tokenId: '345' }, { id: '123', tokenId: '777'}, { id: '13', tokenId: '5' }, { id: '13', tokenId: '5'}]
console.log(editStruct(struct))