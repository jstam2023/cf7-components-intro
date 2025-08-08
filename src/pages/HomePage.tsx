import {useEffect} from "react";

const HomePage = () => {

    useEffect(() => {
        document.title = "homePage";
    }, []);

    return (
        <>
            <h1 className="text-bold text-2xl text-center mt-24">Home Page</h1>
        </>
    )
}

export default HomePage;