import { useState } from "react"
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

function App() {

  const [journalEntryData, setjournalEntryData] = useState(data);

  const journalEntries = journalEntryData.map(entry =>
    <Entry journalEntryData={entry} key={entry.title} />
  );

  return (
    <>
      <Header />
      {journalEntries}
    </>
  );
}

export default App;
