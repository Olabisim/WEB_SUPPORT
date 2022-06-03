
import { Header } from "../component/Header"
import '../css/statscontainer.css'
import '../css/home.css'

export const Home = () => {
        return (
                <div>
                        <div>
                                <Header />

                                <div className="stats-container-main" >
                                        <div className="stats-container red">

                                                <i className="fa fa-exclamation-triangle"></i>
                                                <div className="counter">200</div>
                                                <h4>FAULT</h4>

                                        </div>
                                        <div className="stats-container orange">

                                                <i className="fa fa-exclamation"></i>
                                                <div className="counter">30</div>
                                                <h4>SOLUTION</h4>

                                        </div>
                                        <div className="stats-container blue">
                                                
                                                <i className="fa fa-check"></i>
                                                <div className="counter">50</div>
                                                <h4>VEFIRIFIED SOLUTION</h4>
                                                
                                        </div>
                                </div>

                                <div>
                                        <h2 className="input_faulth2">POST A HARDWARE FAULT WITH THE PLUS ICON</h2>
                                        <div className="input_fault">
                                                <div>
                                                        <img src="../../undraw_data_input_fxv2.png" alt="input" />
                                                        
                                                </div>
                                                <div>
                                                        <div className="input_fault plus-circle"></div>

                                                </div>
                                        </div>

                                </div>
                                
                                <h2>this is a new fault</h2>
                                
                        </div>
                </div>
        )
}