import HeaderResponsive from "./HeaderResponsive.tsx";
import Footer from "./Footer.tsx";
import {Outlet} from "react-router";
import ExamplesSection from "./ExamplesSection.tsx";

const RouterExamplesLayout = ()=> {
    return (
        <>
            <HeaderResponsive />
            <div className="container mx-auto min-h-[80vh] pt-28">
                <Outlet/>
            </div>
            <ExamplesSection/>
            <Footer/>
        </>
    )
}

export default RouterExamplesLayout;