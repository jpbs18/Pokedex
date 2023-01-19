import './app.css';
import {MyHeader, MyMain, MyAside,MyFooter} from "../../layout"
import {useWindowDimensions} from "../../hooks/useWindowDimensions";

export default () => {

    const {width} = useWindowDimensions()

    return (
        <div className="App-Container">
            <MyHeader/>
            {width < 420 || <MyAside/>}
            <MyMain/>
            <MyFooter/>
        </div>
    );
}