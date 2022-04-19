function LoginApp(){
    return(
        <>
            <div id = "Container-Login" className="Login-Secion">
            <div id = "LoginArea" className="Login-Area">
            <div className="Login-Area-Title">
            <button id="LoginBack" className="LoginBack button"><span className="icon-cancel-circle"></span></button>
                <h1>Iniciar Sección</h1>
                </div> 
                <form className="Login-Area-Form">
                    <label className="Login-Area-label">Email:</label>
                    <input id="LoginEmail" required  type="email" className="Login-Area-input" />
                    <label className="Login-Area-label">Contraseña:</label>
                    <input id="LoginPass" required  type="password" className="Login-Area-input" />
                    <div id = "ErrSectionLogin" className="Err-Section-Login">El Email y/o Contraseña es incorrecto</div>
                    <button id = "LoginOK" type = "submit" className="Login-Area-btn button"><span className="icon-enter"></span>enter</button>
                </form>
            </div>
            </div>
        </>
    )
}


export default LoginApp;