
import { useState } from "react";

import Tabs from "../Tabs/Tabs";
import TranslationAdder from "../TranslationAdder/TranslationAdder";
import RandomWordSection from "../RandomWordSection/RandomWordSection"
import TranslationList from "../TranslationList/TranslationList"

export default function Main() {
  const [tab, setTab] = useState('addWord');
  const tabBodyStyles = {
    paddingTop: '0',
    border: '1px solid #fff',
    margin: '-1px 12px 0',
    position: 'relative',
  }

  return (
    <main className="offset--cm">
      <Tabs active={tab}  tabChange={(current) => setTab(current)} />

      {tab === 'addWord' &&
       <TranslationAdder style={tabBodyStyles} />
      }
      { tab === 'goRandom' &&
        <RandomWordSection style={tabBodyStyles} />
      }
      { tab === 'showList' &&
        <TranslationList style={tabBodyStyles} />
      }
    </main>
  )
}