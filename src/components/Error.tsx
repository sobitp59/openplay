import React, { ErrorInfo, useEffect, useState } from 'react'
import OPENPLAY_LOGO from "../assets/icons/openplay-icon.svg"

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
            <div className='w-full h-full flex flex-col justify-center align-middle gap-5'>
                <img className='w-[500px]' src={OPENPLAY_LOGO} alt="OPEN PLAY IMAGE" />
                <h1 className='text-4xl'>Something went wrong! Please try again.</h1>
            </div>
        )
    }
    
    return <>{children}</>;
}

export default ErrorBoundary