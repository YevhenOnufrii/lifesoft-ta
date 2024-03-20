import { Button, Container, Typography } from '@mui/material'

import { FC } from 'react'

const App: FC = () => {
  return (
    <>
      <Container>
        <Typography>App</Typography>
        <Button variant="outlined"> My button </Button>
      </Container>
    </>
  )
}

export default App
