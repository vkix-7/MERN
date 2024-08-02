import React,{useState} from 'react'
function Header()
{
const [count, setcount] = useState(0);

  return ( 
   <>
 <h1>Count : {count}</h1>
 <button class = "v" onClick={()=> setcount(count+1)}> +</button>
 <button class = "v" onClick={()=> setcount(count-1)}>-</button>
  </>
  );

}
export default Header