import '@/styles/globals.css'
import { Provider} from '@/components/ui/provider'

function Application({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default Application
