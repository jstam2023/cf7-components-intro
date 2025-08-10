import HeaderResponsive from "./HeaderResponsive.tsx";
import Footer from "./Footer.tsx";
import {Outlet} from "react-router";
import { Toaster } from "@/components/ui/sonner"


const RouterLayout = ()=> {
    return (
        <>
            <HeaderResponsive />
            <div className="container mx-auto min-h-[95vh] pt-28">
                <Outlet/>
            </div>
            <Toaster richColors/>
            <Footer/>
        </>
    )
}

export default RouterLayout;