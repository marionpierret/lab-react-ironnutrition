import React from 'react'
import { Divider, Input } from 'antd';
import {useState} from 'react'

function Search(props) {

const {searchFoods} = props

const [search, setSearch] = useState('')

const handleSearch = e => {
    searchFoods(e.target.value)
    setSearch(e.target.value)
}

  return (
    <>
    <Divider>Search</Divider>

      <label>Search</label>
      <Input placeholder = "Enter search query" value={search} type="text" onChange={handleSearch} />
    </>
  )
}

export default Search