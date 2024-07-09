import "./ScrollToTopButton.module.css"

function ScrollTopButton() {
    
    const handleClick = () => { /* (handleclick) ao clicar no botão */
        window.scrollTo({
            top: 0,       /* rola a página para o topo */
            behavior: 'smooth'  /* rolando com comportamento suave */
        })
    }
    
    return (
    <button onClick={handleClick}>
        &#9650; {/* caractere html SETA*/}
    </button>
    )

}

export default ScrollTopButton