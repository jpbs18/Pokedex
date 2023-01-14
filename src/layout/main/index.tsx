import MyForm from "../../components/mainForm"
import MyContent from "../../components/mainContent"
import {useState} from "react"
import "./style.css"


export default () => {

    const [noMatch, setNoMatch] = useState(false)

    return(
        <main className="Main-Container">
            <MyForm setNoMatch={setNoMatch}/>
            <MyContent noMatch={noMatch}/>
        </main>
    )
}