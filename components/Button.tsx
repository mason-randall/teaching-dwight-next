'use client'

import {useState} from "react";

export default function Button(props: {
    children: React.ReactNode,
}) {

    const [count, setCount] = useState(0)

    return <button onClick={()=>{
        setCount(count+1)
    }}>{props.children} {count}</button>
}