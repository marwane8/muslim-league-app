type Props = {
    children?: React.ReactNode
}


const Container = ({ children }: Props) => {
    return <div className="container px-5 mx-auto">{children}</div>
}

export default Container