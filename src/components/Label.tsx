interface Props {
    text: string
}
const Label: React.FC<Props> = ({ text }) => {
    return (
        <label className="text-xl text-gray-800">{text}</label>
    )
}

export default Label