import { TextField } from '@mui/material'

const Search = (props: any) => {
  return (
    <form className="search">
      <TextField
        fullWidth
        label="Search for characters"
        onChange={(e) => {
          props.updatePageNumber(1)
          props.setSearch(e.target.value)
        }}
        className="input"
      />
    </form>
  )
}

export default Search
