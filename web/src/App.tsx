import './styles/global.css'
import './lib/dayjs'
import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'

navigator.serviceWorker.register('service-worker.js')

export function App() {
  /*
  window.Notification.requestPermission(permission => {
    if (permission === 'granted') {
      console.log('Permission granted')
      new window.Notification('Habits', {
        body: 'Texto',
      })
    }
  })
  */

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>
  )
}
