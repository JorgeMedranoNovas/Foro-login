function RegistreApp(){

    return(

        <>
            <div id = "Container-Registre" className="Registre-Secion">
            <div id = "RegistreArea" className="Registre-Area">
                <div className="Registre-Area-Title">
                   <button id="RegistreBack" className="RegistreBack button"><span className="icon-cancel-circle"></span></button>
                <h1>Crear Usuario</h1>
                </div>      
                
                <form className="Registre-Area-Form">

                <label className="Registre-Area-label">Email:</label>
                    <input id = "RegistreEmail" required type="email" className="Registre-Area-input" />

                    <div id = "ErrSectionRegistre" className="Err-Section-Registre">Este email es invalido o ya se encuentra registrado</div>

                    <label className="Registre-Area-label">Usuario:</label>
                    <input id = "RegistreUser" required minLength= {4} maxLength={10} type="text" className="Registre-Area-input" />

                    <label className="Registre-Area-label">Contraseña:</label>
                    <input  id = "RegistrePass" required minLength= {6} type="password" className="Registre-Area-input" />

                    <label className="Registre-Area-label">Nombre:</label>
                    <input  id = "RegistreName" required minLength= {3} maxLength={10} type="text" className="Registre-Area-input" />

                    <label className="Registre-Area-label">Apellido:</label>
                    <input  id = "RegistreLName" required minLength= {4} maxLength={15} type="text" className="Registre-Area-input" />

                    <button id = "RegistreOK" type = "submit" className="Registre-Area-btn button"><span className="icon-user-plus"></span>Registrarse</button>

                    
                </form>
                
                </div>
            </div>
       
        
        </>
    )
}


export default RegistreApp;