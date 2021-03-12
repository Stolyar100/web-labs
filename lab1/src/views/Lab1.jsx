import React from 'react'

const Lab1 = ({ studentName, variant }) => {
  const variable = []

  for (let i = 0; i < variant; i++) {
    variable.push(i ** 2)
  }

  return (
    <div>
      <h1>Варіант №{variant}</h1>
      <p>Виконав: {studentName}</p>
      <p>
        {variant > 15 ? 'Друга' : 'Перша'} підгрупа {variable.length}
      </p>
      <ul>
        {variable.map((value, index) => (
          <li>
            {value} - квадрат числа {index}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Lab1
