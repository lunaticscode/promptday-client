import { FC, PropsWithChildren } from 'react'

interface PageProps extends PropsWithChildren {}
const Page: FC<PageProps> = ({ children }) => {
  return <div className={'app-page'}>{children}</div>
}
export default Page
