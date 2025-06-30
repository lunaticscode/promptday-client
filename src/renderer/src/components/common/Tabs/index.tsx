import RUITabs from '@hw-rui/tabs'

const Tabs = () => {
  return (
    <RUITabs defaultValue="2">
      <RUITabs.Item value="1">menu1</RUITabs.Item>
      <RUITabs.Item value="2">menu2</RUITabs.Item>
      <RUITabs.Item value="3">menu3</RUITabs.Item>
    </RUITabs>
  )
}
export default Tabs
