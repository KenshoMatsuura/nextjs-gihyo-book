import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import Button from '.'

describe('Button', () => {
  let handleClick: jest.Mock<void, []>

  beforeEach(() => {
    handleClick = jest.fn()
    render(
      <Button variant="primary" onClick={handleClick}>
        Button
      </Button>,
    )
  })

  it('ボタンを押した時にonClickが呼ばれる', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Button' }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
