
function SectionApp(){

    return(

        <>
        
        <div id = "Container-SectionApp" className="container">
        
        <div className="header">
            <h1 className="title">Contilliando</h1>
            <div className="Options">
                <h1 className="NameUser" id="NameUser">.</h1>
            <button type="button" id="ExitOption" className="btn-Options button"><span className="icon-exit"></span> Salir</button>
                <button id="AccederOption" type="button" className="btn-Options button"><span className="icon-enter"></span>Acceder</button>
                <button type="button" id="RegistrarseOption" className="btn-Options button"><span className="icon-users"></span>Registrarse</button>
            </div>
        </div>

        <div className="section">
            <div id="AddArea" className="Add-Area">
                <div id="PhoneAdd" className="Phone-Add"><h1 id="InitialsUserAdd">.</h1></div>
                <h2 className="SectionName" id="UserName">.</h2>
                <textarea   id = "Section-Messager" placeholder="Escribir Mensaje..." className = "Add-Data"></textarea>
                <button id = "Section-Messager-btn" type="button" value="Publicar Mensaje" className="Add-btn button"><span className="icon-plus"></span>Publicar Mensaje</button>
                <div id = "AddSectionblock" className="AddSectionblock"><h1 className="Resalt"><span className="icon-notification Resalt"></span></h1><br /><h2>Esta Opción Solo Se Encuntra Disponible Para Los Usuarios</h2></div>
            </div>
            <div id = "Get-Area" className="Get-Area">
                <div id="IntroGetSection" className="Get-Messager-Section">
                <div id="PhoneGet" className="Get-Messager-Phone">CO</div>
                <p className="Get-Messager-Text"><h3 className="Get-Messager-Name">Cotillando_Oficial</h3>Hola a todos y todas!, sean bienvenidos a su foro interactivo <strong>Contillando</strong>,aqui podran interractuar con sus demás compañeros, compartir ideas e opiniones sobre cualquier tema que gusten. </p>
                </div>
            </div>
        </div>

        <div id="Sub-Container-SectionApp" className="sub-container"/>
        <div id="alertUserCreated" className="alertUserCreated"><span className="icon-checkmark Resalt"></span>El Usuario Fue Creado Correctamente</div>

        </div>
        
        </>
    )
}


export default SectionApp;
