import { ReactElement } from 'react'
import { ContentProvider } from './contexts/content'

export default function Providers({ children }: { children: ReactElement }): ReactElement {
  return (
    <ContentProvider>
      {children}
    </ContentProvider>
  )
}
