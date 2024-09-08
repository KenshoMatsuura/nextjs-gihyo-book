import { Meta, StoryFn } from '@storybook/react'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ImagePreview from './'
import Dropzone from 'components/molecules/Dropzone'

// ImagePreview コンポーネントのプロパティ型定義
interface ImagePreviewProps {
  src: string
  alt?: string
  height?: string // 修正: string に変更
  width?: string // もともと string
  onRemove?: (src: string) => void
}

export default {
  title: 'Molecules/ImagePreview',
  component: ImagePreview,
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    alt: {
      control: { type: 'text' },
      description: '代替テキスト',
      table: {
        type: { summary: 'string' },
      },
    },
    height: {
      control: { type: 'text' }, // 修正: string を期待
      description: '縦幅',
      table: {
        type: { summary: 'string' }, // string に変更
      },
    },
    width: {
      control: { type: 'text' }, // 修正: string を期待
      description: '横幅',
      table: {
        type: { summary: 'string' }, // string に変更
      },
    },
    onRemove: {
      description: '削除ボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<ImagePreviewProps>

const Container = styled.div`
  width: 288px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
`

interface Image {
  file?: File
  src?: string
}

const Template: StoryFn<ImagePreviewProps> = (args) => {
  const [files, setFiles] = useState<File[]>([])
  const [images, setImages] = useState<Image[]>([])

  useEffect(() => {
    const newImages = [...images]

    for (const f of files) {
      const index = newImages.findIndex((img: Image) => img.file === f)

      if (index === -1) {
        newImages.push({
          file: f,
          src: URL.createObjectURL(f),
        })
      }
    }
    setImages(newImages)
  }, [files])

  const handleRemove = (src: string) => {
    const image = images.find((img: Image) => img.src === src)

    if (image !== undefined) {
      setImages((images) => images.filter((img) => img.src !== image.src))
      setFiles((files) => files.filter((file: File) => file !== image.file))
    }

    args.onRemove && args.onRemove(src)
  }

  return (
    <Container>
      <Dropzone value={files} onDrop={(fileList) => setFiles(fileList)} />
      {images.map((image, i) => (
        <ImagePreview
          key={i}
          width="100px"
          height="100px" // 修正: string 型に変更
          {...args}
          src={image.src || ''}
          onRemove={handleRemove}
        />
      ))}
    </Container>
  )
}

export const WithDropzone = Template.bind({})
WithDropzone.args = {}
