import "./Sidebar.css";
import.meta.env.REACT_APP_API_URL;

const Footer = () => {  
    const footerUrl = process.env.REACT_APP_FOOTER_URL;
    return ( 
        <footer>
            Powered By :: {footerUrl}
        </footer>
    ); 
}

export default  Footer;