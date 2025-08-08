import {useEffect} from "react";

const ExamplesPage = () => {

    useEffect(()=>{
        document.title = "Examples"
    }, [])

    return (
        <>
            <h1 className="text-2xl text-center font-bold mt-24">Examples</h1>
        </>
    )
}

export default ExamplesPage;