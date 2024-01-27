import React, {useRef,useEffect} from 'react'

export default function () {
    const myRef=useRef(null);

    useEffect(() =>{
    console.log(myRef.cuurent);

},[]);
  return (
    <div><input ref={myRef} type="text"/>
    </div>
  );
}
