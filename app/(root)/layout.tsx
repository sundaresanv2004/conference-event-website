import React, { ReactNode } from 'react';
import { Navbar, Footer } from "@/components/shared";


const Layout = ({ children } : { children : ReactNode}) => {
    return (
        <div>
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
};

export default Layout;
