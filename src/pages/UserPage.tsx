import {useEffect} from "react";
import {useParams} from "react-router";

const UserPage = () => {
    const {userId} = useParams();



    useEffect(() => {
        document.title = `CF7 User id: ${userId}`
    }, [userId]);
    return(
        <>
            <h1 className="text-center mt-24 text-bold text-2xl">User with id: {userId}</h1>

        </>
    )
}

export default UserPage;