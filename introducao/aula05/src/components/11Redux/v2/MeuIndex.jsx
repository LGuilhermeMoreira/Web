import TelaPrincipal from "./TelaPrincipal"
import { store } from "./store/store"
import { Provider } from "react-redux"

const MeuIndex = () =>
<>
    <Provider store={store}>
    <TelaPrincipal />
    </Provider>
</>

export default MeuIndex