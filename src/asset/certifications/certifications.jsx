import './certifications.css';
import federchimica from '../img/assobiotec-federchimica-vector-logo.svg'
import Leroy from '../img/Leroy_Merlin.svg'
import cocaCola from '../img/world-of-coca-cola-vector-logo.svg'
import Mits from '../img/mitsubishi-electric-factory-automation-vector-logo.svg'
import Cambridge from '../img/cambridge-assessment-international-education-vector-logo.svg'
import Nurith from '../img/logo-nurith.png'

function Certifications(){
    return(
    <div className='certifications'>
        <h3 className='title_text_box'>My certifications</h3>
        <div className='logo_container'>

            <img src={federchimica} alt="federchimica" className='logos_certifications'/>
            <img src={Leroy} alt="Leroy" className='logos_certifications'/>
            <img src={cocaCola} alt="cocaCola" className='logos_certifications'/>
            <img src={Mits} alt="Mits" className='logos_certifications'/>
            <img src={Cambridge} alt="Cambridge" className='logos_certifications'/>
            <img src={Nurith} alt="Nurith" className='logos_certifications' id='NurithID'/>
        </div>
        <p className='text_box'>I studied how to create a website,
                              or how the Internet works and how much money do I have to spend to improve a company!
        </p>
    </div>
    );
}

export default Certifications;