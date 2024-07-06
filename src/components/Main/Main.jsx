
import { useState } from "react";

import Tabs from "../Tabs/Tabs";
import TranslationAdder from "../TranslationAdder/TranslationAdder";
import RandomWordSection from "../RandomWordSection/RandomWordSection"
import TranslationListSection from "../TranslationListSection/TranslationListSection"

export default function Main() {
  const [tab, setTab] = useState(localStorage.length ? 'showList' : 'addWord');

  return (
    <>
      <Tabs active={tab} tabChange={(current) => setTab(current)} />

      {tab === 'addWord' &&
        <TranslationAdder className={'tab-body'} />
      }
      {tab === 'goRandom' &&
        <RandomWordSection className={'tab-body'} />
      }
      {tab === 'showList' &&
        <TranslationListSection className={'tab-body'} />
      }
    </>

  )
}