import React from 'react'
import { Container, Image, Icon, Section, Article, List, SocialMediaContainer } from './style'

const MyAbout = () => {
  return (
        <Container className="Main-Container">
            <Section>
                <h1>João Santos</h1>
                <Image src={`${process.env.PUBLIC_URL}/image.webp`} alt={'profile picture'}/>
                <Article>
                    <p>I am an enthusiast about programming in general with special interest in frontend developing.</p>
                    <p>This is the tool kit that used to build this pokédex:</p>
                    <List>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Styled Components</li>
                        <li>React</li>
                    </List>
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
                        It is website that provides a RESTful API interface to highly detailed objects built
                        from thousands of lines of data related to Pokémon.
                    </p>
                    <p>
                        Using this website, you can consume information on Pokémon, their moves, abilities,
                        types, egg groups and much, much more.
                    </p>

                    <p>
                        Currently this API has tens of thousands of individual items in our database, including:
                    </p>
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
                    <p>
                        And that is just scratching the surface! To see all the different types of data we have,
                        check out the <a href="https://pokeapi.co/docs/v2" target="blank">docs</a>.
                    </p>
                </Article>
            </Section>

            <Section>
                <h2>Contact me</h2>
                <Article>
                    <p>
                        This project is far from being finished, so feel free to contact me and give some pointers
                    about good practices and new ideas and tools.
                    </p>

                    <p>
                        You can reach to me on Linkedin or check other projects that I have at my GitHub account!
                        Just click on the following icons.
                    </p>

                    <SocialMediaContainer>
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-santos21/" target="blank">
                                <Icon src={`${process.env.PUBLIC_URL}/linkedin.webp`} alt="linkedin logo" width={'10%'}/>
                            </a>

                            <a href="https://github.com/jpbs18" target="blank">
                                <Icon src={`${process.env.PUBLIC_URL}/github.webp`} alt="github logo" width={'10%'}/>
                            </a>
                    </SocialMediaContainer>
                </Article>
            </Section>
        </Container>
  )
}

export default MyAbout
