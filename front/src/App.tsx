
import {Home} from './page/Index'
import {Login} from './page/Login'
import {Routes, Route} from 'react-router-dom'


function App() {
        return (
                <div>


                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={<Login />} />
                        </Routes>

                </div>
        );
}

export default App;