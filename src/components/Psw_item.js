import React from 'react'
import { Link } from 'react-router-dom'

const PswItem = ({
  project,
  customer,
  supplier,
  drawingNumber,
  validationDate,
  validUntil,
  linkToFile
}) => {

  return (
    <div>
      <h3>{drawingNumber}</h3>
      <p>{supplier}</p>
      <p>{project}</p>
      <p>{customer}</p>
      <Link to={linkToFile}>
        PSW
        <img alt='PdfIcon' src='../pictures/1-02-512.webp'/>
      </Link>
      <p>Érvényességi idő: {validationDate} - {validUntil}</p>
    </div>
  )
}

export { PswItem as default }