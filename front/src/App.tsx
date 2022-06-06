
import {Home} from './page/Index'
import {Login} from './page/Login'
import {CreateFaultForm} from './page/CreateFaultForm'
import {ViewFaults} from './page/ViewFaults'
import {Routes, Route} from 'react-router-dom'


function App() {
        return (
                <div>

                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/create" element={<CreateFaultForm />} />
                                <Route path="/faultsnp" element={<ViewFaults />} />
                        </Routes>

                </div>
        );
}

export default App;
