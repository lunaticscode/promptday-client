import { FC, PropsWithChildren } from 'react'

interface TabsItemProps extends PropsWithChildren {}
const TabsItem: FC<TabsItemProps> = ({ children }) => {
  return <>{children}</>
}
export default TabsItem
