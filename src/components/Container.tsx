interface Props {
    children: React.ReactNode
}
const Container: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col space-y-2">{children}</div>
    )
}

export default Container