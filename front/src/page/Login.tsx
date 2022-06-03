import '../css/login.css'


export const Login = () => {
        return (
                <div className="login">

                        <div className="form">

                                <form className="login-form">

                                        <span className="material-icons">lock</span>
                                        <input type="text" placeholder="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                                        <input type="password" placeholder="password" required />
                                        <button>login</button>
                                
                                </form>  
                        </div>
                </div>
        )
}