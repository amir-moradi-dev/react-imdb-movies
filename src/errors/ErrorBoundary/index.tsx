import classes from './index.module.css'
import React, {ErrorInfo} from "react";
import ErrorDetails from "../ErrorDetails";

type Props = {
    children:React.ReactNode
}
type State = {
    error: Error|null
    errorInfo: ErrorInfo|null
}

class ErrorBoundary extends React.Component<Props,State> {
    constructor(props:Props) {
        super(props)
        this.state = { error:null, errorInfo:null }
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({error,errorInfo})
    }

    render () {
        if(this.state.error)
            return <ErrorDetails error={this.state.error} errorInfo={this.state.errorInfo} />
        return <>
            {this.props.children}
        </>
    }
}

export default ErrorBoundary