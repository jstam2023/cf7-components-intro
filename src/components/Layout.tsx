import React from "react";
import Header from "./Header.tsx";
import Footer from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Header/>
            <div className="container mx-auto min-h-[95vh] pt-28">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout;