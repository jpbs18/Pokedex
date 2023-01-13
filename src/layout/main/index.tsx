import "./style.css"
import MyForm from "../../components/mainForm"
import MyContent from "../../components/mainContent"


export default () => {
    return(
        <main className="Main-Container">
            <MyForm/>
            <MyContent/>
        </main>
    )
}