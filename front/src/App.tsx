
import {Home} from './page/Index'
import {Login} from './page/Login'
import {CreateFaultForm} from './page/CreateFaultForm'
import {Routes, Route} from 'react-router-dom'


function App() {
        return (
                <div>


                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/create" element={<CreateFaultForm />} />
                        </Routes>

                </div>
        );
}

export default App;
