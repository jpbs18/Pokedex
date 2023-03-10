import React, { useContext, useState } from 'react'
import { Container, Button, Form } from './style'
import { getTotalLength } from '../../../utils/functions'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import AppContext from '../../../context/app'

const MyForm = () => {
  const { innerWidth } = useWindowDimensions()
  const { list, setList, setNoMatch, noMatch, selected, setSelected } = useContext(AppContext)
  const [currentName, setCurrentName] = useState('')
  const conditionsRequired = list.length !== getTotalLength() && !noMatch && innerWidth > 420 &&
      getTotalLength() !== undefined && list.length > 0
  const filterByName = () => {
    const data = JSON.parse(localStorage.getItem('list')!)
    const filteredData = data.filter((pokemon: { name: string | string[] }) => pokemon.name.includes(currentName.toLowerCase()))
    setSelected({ ...selected, id: selected.id, isSelected: false })

    if (filteredData.length > 0) {
      setList(filteredData)
      setNoMatch(false)
    } else setNoMatch(true)
  }
  const cleanFilter = () => {
    setCurrentName('')
    setNoMatch(false)
    setList(JSON.parse(localStorage.getItem('list')!))
    setSelected({ ...selected, id: 0, isSelected: false })
  }

  return (
        <Container className="Form-Container">
            {conditionsRequired && <span className="Counter">
                {`Found ${list.length}/${getTotalLength()} results`}
            </span>}
            <Form className="Label-Container">
                <label>Search by name:
                    <input style={{ height: '22px' }} type="text" value={currentName}
                           onChange={e => { setCurrentName(e.target.value) }}/>
                </label>
                <Button onClick={filterByName}>🔍</Button>
                <Button onClick={cleanFilter}>🌊</Button>
            </Form>
        </Container>
  )
}

export default MyForm
