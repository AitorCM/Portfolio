import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/Aitor_C_M" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/AitorCM" target="_blank" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.instagram.com/aitor935/" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="https://www.linkedin.com/in/aitor-carricondo-monter-737600124/" target="_blank" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
                        <li><a href="mailto:aitor935@gmail.com" target="_blank" className="icon fa-inbox"><span className="label">GMail</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
