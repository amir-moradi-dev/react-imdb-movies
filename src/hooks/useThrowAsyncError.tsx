import {useState,useCallback} from "react";

export type ThrowAsyncErrorType = (e:Error)=>void

export function useThrowAsyncError() {
    const [_, setError] = useState()
    return useCallback((e:Error) => {
        setError(() => {throw e})
    },[setError])
}