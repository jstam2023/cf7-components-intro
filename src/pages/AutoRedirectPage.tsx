import {useEffect} from "react";
import AutoRedirect from "../components/AutoRedirect.tsx";

const AutoRedirectPage = () => {

    useEffect(() => {
        document.title = "CF7 Auto Redirect Example";
    }, []);

    return (
        <>
            <AutoRedirect />
        </>
    )
};
export default AutoRedirectPage;