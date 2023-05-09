// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const Filter = (props: any) => {
  return (
    <div>
      <div className="filterContainer">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.status}
            label="Age"
            onChange={props.handleChangeStatus}
          >
            <MenuItem value={'Alive'}>Alive</MenuItem>
            <MenuItem value={'Dead'}>Dead</MenuItem>
            <MenuItem value={'Unknown'}>Unknown</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.gender}
            label="Age"
            onChange={props.handleChangeGender}
          >
            <MenuItem value={'Male'}>Male</MenuItem>
            <MenuItem value={'Female'}>Female</MenuItem>
            <MenuItem value={'Unknown'}>Unknown</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Species</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.species}
            label="Age"
            onChange={props.handleChangeSpecies}
          >
            {props?.speciesArr?.map((species: string[]) => (
              <MenuItem key={species} value={species}>
                {species}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default Filter
