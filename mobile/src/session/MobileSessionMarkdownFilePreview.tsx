import { MobileFileMarkdownPreview } from '../files/MobileFileMarkdownPreview'

type Props = {
  relativePath: string
  doc: {
    content: string
    truncated: boolean
    byteLength: number
  }
}

export function MobileSessionMarkdownFilePreview({ relativePath, doc }: Props) {
  return <MobileFileMarkdownPreview relativePath={relativePath} {...doc} />
}
