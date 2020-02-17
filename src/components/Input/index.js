import React from 'react'
import { Input } from './styles'

const input = ({ type = 'text', placeholder }) => (
  <Input type={type} placeholder={placeholder} />
)

export default input
