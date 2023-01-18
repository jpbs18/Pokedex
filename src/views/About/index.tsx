import {MyFooter, MyHeader} from "../../layout"
import {MyAbout} from "../../components"
import "./about.css"
export default () => {
    return(
        <div className="About-Container">
            <MyHeader/>
            <MyAbout/>
            <MyFooter/>
        </div>
    )
 }