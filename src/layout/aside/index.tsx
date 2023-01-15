import {Container, List, Item, Button} from "./style"
import {generations, types} from "../../utils/variables";

export default () => {

    return(
        <Container className="Aside-Container">
            <List className="Aside-List">
                <h4>Search by Generation:</h4>
                <Item className="Item-List">
                    {generations.map((gen,i) => <Button key={`Gen-${gen}-${i}`}>{gen}</Button>)}
                </Item>
            </List>

            <List className="Aside-List">
                <h4>Search by Type:</h4>
                <Item className="Item-List">
                    {types.map((type,i) => <Button key={`Type-${type}-${i}`}>{type}</Button>)}
                </Item>
            </List>
        </Container>
    )
}