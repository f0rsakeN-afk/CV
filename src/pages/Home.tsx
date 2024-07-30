import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import DataTable from "./DataTable"
import View from "./View"

const Home = () => {
    return (
        <div className="max-h-screen flex flex-col ">
            <Navbar />
            <div className=" container m-auto grid grid-cols-3 gap-4 overflow-y-scroll scrollbar">
                <DataTable />
                <section className="col-span-2">
                    <View />
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Home;