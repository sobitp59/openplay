import React, { ErrorInfo, useEffect, useState } from 'react'
import OPENPLAY_LOGO from "../assets/icons/openplay-icon.svg"
import { AlertTriangle, ServerOff } from 'lucide-react';

const ErrorBoundary = ({children} : {children : React.ReactNode}) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const handleError = (event: ErrorEvent) => {
            console.log('Some error occured', {event});
            setHasError(true);
        }

        window.addEventListener('error', handleError);
        return () => {
            window.removeEventListener('error', handleError);
          };

    }, [])

    if(hasError){
        return(
            <div className='mt-[400px] ml-[400px] flex'>
                <div className=''>
                    <img className='w-[500px]' src={OPENPLAY_LOGO} alt="OPEN PLAY IMAGE" />
                    <h1 className='text-2xl font-bold text-red-500'>Something went wrong! Please try again.</h1>
                </div>
                <div>
                <AlertTriangle  className='w-40 h-40 text-yellow-400'/>
                </div>
            </div>
        )
    }
    
    return <>{children}</>;
}

export default ErrorBoundary