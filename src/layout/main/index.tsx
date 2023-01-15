import MyForm from "../../components/mainForm"
import MyContent from "../../components/mainContent"
import "./style.css";

export default () => {
    return(
        <main className="Main-Container">
            <MyForm />
            <MyContent />
        </main>
    )
}