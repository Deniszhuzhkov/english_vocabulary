import Button from "../Button/Button";

export default function Tabs({active ,tabChange}) {
  return (
    <div className="tabs">
        <Button className={'tabs__element ' + (active === 'addWord' ? 'active' : '')} onClick={() => tabChange('addWord')}>
          Add Word/Letter
        </Button>
        <Button className={'tabs__element ' + (active === 'goRandom' ? 'active' : '') } onClick={() => tabChange('goRandom')}>
          Go Random
        </Button>
        <Button className={'tabs__element ' + (active === 'showList' ? 'active' : '') } onClick={() => tabChange('showList')}>
          My List
        </Button>
    </div>
  )
}