interface Props {
    text: string
}
const Title: React.FC<Props> = ({ text }) => {
    return (
        <h2 className="text-2xl font-semibold text-gray-800">{text}</h2>
    )
}

export default Title;