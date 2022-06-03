
import { Header } from "../component/Header"
import '../css/statscontainer.css'

export const Home = () => {
        return (
                <div>
                        <div>
                                <Header />

                                <div>
                                <div className="stats-container red">
                                        <i className="fa-solid fa-comments fa-3x icon"></i>
                                        <div className="counter" data-ceil="15">15</div>
                                        <h4>Comments</h4>
                                        </div>
                                        <div className="stats-container blue">
                                        <i className="fa-solid fa-circle-question fa-3x icon"></i>
                                        <div className="counter" data-ceil="260">260</div>
                                        <h4>Questions</h4>
                                        </div>
                                        <div className="stats-container orange">
                                        <i className="fa-solid fa-user fa-3x icon"></i>
                                        <div className="counter" data-ceil="27">27</div>
                                        <h4>Users</h4>
                                        </div>
                                </div>
                                <h2>this is a new fault</h2>
                                
                        </div>
                </div>
        )
}