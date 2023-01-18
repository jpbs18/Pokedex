import {Container, Image, Icon, Section, Article, List} from "./style"
export default () => {

    return(
        <Container className="Main-Container">
            <Section>
                <h1>João Santos</h1>
                <Image src={`${process.env.PUBLIC_URL}/image.webp`} alt={"profile picture"}/>
                <Article>
                    <p>I'm a enthusiast about programming in general with special interest in frontend developing.</p>
                    <p>This is the tool kit that used to build this pokédex:</p>
                    <List>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Styled Components</li>
                        <li>React</li>
                    </List>
                    <p></p>
                </Article>
            </Section>

            <Section>
                <h2>PokéAPI</h2>
                <Article>
                    <p>
                        This project was based on a free API called
                        <a href="https://pokeapi.co/" target="blank"> PokéApi</a>.
                    </p>
                    <p>
                        It's website that provides a RESTful API interface to highly detailed objects built
                        from thousands of lines of data related to Pokémon.
                    </p>
                    <p>
                        Using this website, you can consume information on Pokémon, their moves, abilities,
                        types, egg groups and much, much more.
                    </p>

                    <p>
                        Currently this API has tens of thousands of individual items in our database, including:
                        <List>
                            <li>Moves</li>
                            <li>Abilities</li>
                            <li>Pokémon</li>
                            <li>Types</li>
                            <li>Egg Groups</li>
                            <li>Game Versions</li>
                            <li>Items</li>
                            <li>Pokédexes</li>
                            <li>Pokémon Evolution Chains</li>
                        </List>
                    </p>

                    <p>
                        And that's just scratching the surface! To see all the different types of data we have,
                        check out the <a href="https://pokeapi.co/docs/v2" target="blank">docs</a>.
                    </p>
                </Article>
            </Section>

            <Section>
                <h3>Contact me</h3>
                <Article>
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-santos21/" target="blank">
                        <Icon src={`${process.env.PUBLIC_URL}/linkedin.webp`} alt="linkedin logo" width={"10%"}/>
                    </a>
                    <a href="https://github.com/jpbs18" target="blank">
                        <Icon src={`${process.env.PUBLIC_URL}/github.webp`} alt="github logo" width={"10%"}/>
                    </a>
                </Article>
            </Section>
        </Container>
    )
}