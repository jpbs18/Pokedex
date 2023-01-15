import {Container, List, Item, Button} from "./style"
import {generations, types} from "../../utils/variables";

export default () => {

    return(
        <Container className="Aside-Container">
            <List className="Aside-List">
                <h4>Search by Generation:</h4>
                <Item className="Item-List">
                    {generations.map((e,i) => {
                        return <Button key={`${e}-${i}`}>{e}</Button>
                    })}
                </Item>
            </List>

            <List className="Aside-List">
                <h4>Search by Type:</h4>
                <Item className="Item-List">
                    {types.map((e,i) => {
                        return <Button key={`2${e}-${i}`}>{e}</Button>
                    })}
                </Item>
            </List>
        </Container>
    )
}