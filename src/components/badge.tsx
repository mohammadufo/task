import { Chip } from '@mui/material'

const Badge = (props: { status: string }) => {
  return (
    <Chip
      className="badge"
      label={props.status}
      color={
        props.status === 'Alive'
          ? 'success'
          : props.status === 'Dead'
          ? 'error'
          : 'default'
      }
      variant="filled"
    />
  )
}

export default Badge
