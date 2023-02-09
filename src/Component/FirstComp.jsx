import { Button, TextField } from '@mui/material'
import React from 'react'
import { SecondComp } from './SecondComp'

export const FirstComp = () => {
  return (
    <div>
      <h1>first</h1>
        <TextField label="First" type="text"></TextField>
        <Button>Firts</Button>
        <SecondComp/>
    </div>

  )
}
