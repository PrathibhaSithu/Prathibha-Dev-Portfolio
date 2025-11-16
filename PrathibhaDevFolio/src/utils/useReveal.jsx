import { useEffect, useRef } from 'react'


export default function useReveal(){
    const ref = useRef(null)
    useEffect(()=>{
        const node = ref.current
        if(!node) return
        const items = node.querySelectorAll('.reveal')
        const obs = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('revealed')
                    obs.unobserve(entry.target)
                }
            })
        },{threshold:0.12})
        items.forEach(i=>obs.observe(i))
        return ()=> obs.disconnect()
    },[])
    return ref
}