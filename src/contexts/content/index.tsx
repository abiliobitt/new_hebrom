import {createContext,
  FC,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

import { IContent } from '../../interfaces/content'

import {legalizacao, anuncie, regularize} from '../../appData/content/'

interface IContentsContext {
  content?: IContent,
  loading?: boolean,
  getContent?: () => IContent
}


const mapContent = {
  "legalizacao": legalizacao,
  "anuncie": anuncie,
  "regularize": regularize
}

type ObjectKey = keyof typeof mapContent;

export const ContentContext = createContext<IContentsContext| null>(null)

export const useContent = (): IContentsContext => {
  const context = useContext(ContentContext)
  if (context == null) {
    throw new Error('useContent must be used within an ContentContext')
  }

  return context
}

export const ContentProvider: FC<PropsWithChildren> = ({ children }): ReactElement => {
  const [content, setContent] = useState<IContent>()
  const [loading, setLoading] = useState<boolean>(false)

  const getContent = useCallback((): IContent => {
    setLoading(true)
    const pathname = window.location.pathname.split('/')
    const key = pathname[2] as ObjectKey
    const contentPath = mapContent[key] as IContent
    const data = contentPath
    setContent(data)
    setLoading(false)
    return data
  }, [setContent, setLoading])

  useEffect(() => {
    getContent()
  }, [getContent])
  return (
    <ContentContext.Provider
      value={{
        content,
        loading,
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}
