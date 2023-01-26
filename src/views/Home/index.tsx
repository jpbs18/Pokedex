import './app.css';
import {MyHeader, MyMain, MyAside,MyFooter} from "../../layout"
import {useWindowDimensions} from "../../hooks/useWindowDimensions"

export default () => {

    const {innerWidth} = useWindowDimensions()

    return (
        <div className="App-Container">
            <MyHeader/>
            {innerWidth < 420 || <MyAside/>}
            <MyMain/>
            <MyFooter/>
        </div>
    );
}