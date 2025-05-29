import "./App.css";

function Item({ name, ispacked }) {
  //1st approch to print conditional.
  // if (ispacked) {
  //   return <li className="item">{name} -- is placed</li>;
  // }

  // 2nd approach to show these item if not placed using ternory.
  // 
    // return (
    //   <li className="item">
    //     {ispacked ? name + ' ✅' : name}
    //   </li>
    // );
  

  // 3rd approch to print these things using and operator.
  // if(ispacked){
  //   return(
  //     <li className="item">{name}{ispacked && '✅'}</li>
  //   )
  // }



  
}

function App() {
  return (
    <>
      <h2>Packing List Details: </h2>
      <ul>
        <Item ispacked={true} name="abcd" />
        <Item ispacked={false} name="cde" />
        <Item ispacked={true} name="fgh" />
        <Item ispacked={false} name="ijkl" />
        <Item ispacked={true} name="xyz" />
      </ul>

    </>
  );
}

export default App;
