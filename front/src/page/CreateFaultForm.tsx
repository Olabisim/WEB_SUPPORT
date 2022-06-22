
import '../css/createfaultform.css'
import { Link } from 'react-router-dom'

export const CreateFaultForm = () => {

        return (
                <div className="createFaultFormmain">

                        <div className="container">
                                <div className="box"></div>
                                <div className="container-forms">
                                <div className="container-info">
                                <div className="info-item">
                                        <div className="table">
                                                <div className="table-cell">
                                                        <p>
                                                        Have an account?
                                                        </p>
                                                        <div className="btn">
                                                        POST
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="info-item">
                                        <div className="table">
                                        <div className="table-cell">
                                        <p>
                                        {/* Don't have an account?  */}
                                        </p>
                                        <Link to="/">
                                                <div className="btn">
                                                        Go back
                                                </div>
                                        </Link>
                                        </div>
                                        </div>
                                </div>
                                </div>
                                <div className="container-form">
                                <div className="form-item log-in">
                                        <div className="table">
                                        <div className="table-cell">
                                        <input name="Username" placeholder="title" type="text" />
                                        <input name="Fautl" placeholder="Place a fault" type="text" />
                                        <div className="btn">
                                                POST
                                        </div>
                                        </div>
                                        </div>
                                </div>
                                </div>
                                </div>
                        </div>
                        
                </div>
        )
}