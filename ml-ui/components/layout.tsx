import Footer from "./footer"
import Navbar from "./navbar"

type Props = {
    children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout