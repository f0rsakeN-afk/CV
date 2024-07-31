import { RootState } from "../store/store"
import { useSelector } from "react-redux"
import PDF from "./PDF";



const View = () => {
  const pdfData = useSelector((state: RootState) => state.pdfData.data);
  console.log(pdfData);
  return (
    <div>
      {pdfData ? <PDF data={pdfData} /> : <p>No data available for display</p>}
    </div>
  )
}

export default View