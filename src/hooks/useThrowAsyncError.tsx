import {useState,useCallback} from "react";

// This Is For Error Boundary Usages (!Cant fetch async errors)
export type ThrowAsyncErrorType = (e:Error)=>void

export function useThrowAsyncError() {
    const [_, setError] = useState()
    return useCallback((e:Error) => {
        setError(() => {throw e})
    },[setError])
}