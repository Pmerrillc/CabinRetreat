// CustomMarkdownInput.tsx
import { useMemo } from 'react'
import {MarkdownInput, MarkdownInputProps} from 'sanity-plugin-markdown'

export function CustomMarkdownInput(props: any) {
  const reactMdeProps: MarkdownInputProps['reactMdeProps'] = useMemo(() => {
    return {
      options: {
        toolbar: ['bold', 'italic', 'heading-1', 'heading-2', 'heading-3', 'upload-image'],
        // more options available, see:
        // https://github.com/Ionaru/easy-markdown-editor#options-list
      },
      // more props available, see:
      // https://github.com/RIP21/react-simplemde-editor#react-simplemde-easymde-markdown-editor
    }
  }, [])

  return <MarkdownInput {...props} reactMdeProps={reactMdeProps} />
}