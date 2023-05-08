import { TextField } from '@mui/material'

const Search = ({ setSearch, updatePageNumber }) => {
  const searchBtn = (e) => {
    e.preventDefault()
  }

  return (
    <form className="search">
      <TextField
        fullWidth
        label="Search for characters"
        onChange={(e) => {
          updatePageNumber(1)
          setSearch(e.target.value)
        }}
        className="input"
      />
    </form>
  )
}

export default Search
