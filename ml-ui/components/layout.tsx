import Head from "next/head"
import Footer from "./footer"
import Navbar from "./navbar"

type Props = {
    children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </>
    )
}

export default Layout