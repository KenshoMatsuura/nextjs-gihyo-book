import { Meta, StoryFn } from '@storybook/react'
import React, { useState, useEffect } from 'react'
import Dropzone from './index'
import Button from 'components/atoms/Button'
import Box from 'components/layout/Box'

// FileTypeの型定義を確認して、必要に応じて修正
type FileType = 'image/png' | 'image/jpeg' | 'image/jpg' | 'image/gif' // 例として定義しています

// DropzoneProps の型定義
interface DropzoneProps {
  height: number
  width: number | string
  hasError: boolean
  acceptedFileTypes: FileType[]
  onDrop: (files: File[]) => void
  value: File[]
}

export default {
  title: 'Molecules/Dropzone',
  component: Dropzone,
  argTypes: {
    height: {
      control: { type: 'number' },
      description: '縦幅',
      table: {
        type: { summary: 'number' },
      },
    },
    width: {
      control: { type: 'text' },
      description: '横幅',
      table: {
        type: { summary: 'number | string' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    acceptedFileTypes: {
      control: { type: 'select' }, // 修正: 'array' から 'select' に変更
      options: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'], // オプションを指定
      description: '受け付けるファイルタイプ',
      table: {
        type: { summary: 'FileType[]' },
      },
    },
    onDrop: {
      description: 'ファイルがドロップされた時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<DropzoneProps>

const Template: StoryFn<DropzoneProps> = (args) => {
  const [files, setFiles] = useState<File[]>([])

  const handleDrop = (files: File[]) => {
    setFiles(files)
    args.onDrop(files)
  }

  const fetchData = async () => {
    const res = await fetch('/images/sample/1.jpg')
    const blob = await res.blob()
    const file = new File([blob], '1.png', { type: blob.type })

    setFiles((prevFiles) => [...prevFiles, file])
  }

  const clearImages = () => {
    setFiles([])
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Box marginBottom={1}>
        <Dropzone {...args} value={files} onDrop={handleDrop} />
      </Box>
      <Box marginBottom={1}>
        <Button onClick={fetchData}>画像を追加</Button>
      </Box>
      <Box marginBottom={2}>
        <Button onClick={clearImages}>全ての画像をクリア</Button>
      </Box>
      <Box>
        {files.map((f, i) => (
          <img
            src={URL.createObjectURL(f)}
            width="100px"
            key={i}
            alt="sample"
          />
        ))}
      </Box>
    </>
  )
}

export const WithControl = Template.bind({})
WithControl.args = {
  height: 200,
  width: '100%',
  acceptedFileTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'], // FileType[]を指定
  hasError: false,
}
