import  {useEffect,} from "react";

export const useClick = (ref, callback)=>{
    const handleClick = (e)=>{
        if(ref.current && !ref.current.contains(e.target)){
            callback();
        }
    };
    useEffect(()=>{
        document.addEventListener("mousedown",handleClick);
        return ()=>{
            document.removeEventListener("mousedown",handleClick);
        };
    });
};