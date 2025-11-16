import React from 'react'
import Lottie  from 'lottie-react'
import { splashScreen } from '../portfolio'


export default function Splash(){
    const animation = splashScreen?.animation
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div className="w-80 h-80 card flex items-center justify-center">
                {animation ? (
                    <Lottie animationData={animation} loop={false} />
                ) : (
                    <div className="text-center p-6">
                        <h2 className="text-2xl font-bold">Welcome</h2>
                    </div>
                )}
            </div>
        </div>
    )
}