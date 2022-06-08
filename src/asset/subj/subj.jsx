import './subj.css';
import Goldoni from "../img/goldoni.png";
import English from "../img/ing.png";
import Informatic from "../img/inf.png";

function Subjs(){
    return(
    <div className='sub'>
            <hr />
        <div className='sub_box'>
            <h4 className='info_text'>Italian</h4>
            <p className='info'>I Studied how to create a website,or how internet work and how much money i have to spend for improving a company!</p>
            <h6 className='favorite_project'>My favorite project</h6>
            <img src={Goldoni} alt="" />
            <p className='name_img'>Goldoni Project</p>
            <div className='knowledges'>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
            </div>
        </div>

        <div className='sub_box'>
            <h4 className='info_text'>Gpo</h4>
            <p className='info'>I Studied how to create a website,or how internet work and how much money i have to spend for improving a company!</p>
            <h6 className='favorite_project'>My favorite project</h6>
            <img src="idk" alt="" />
            <div className='knowledges'>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
            </div>
        </div>

        <div className='sub_box'>
            <h4 className='info_text'>English</h4>
            <p className='info'>I Studied how to create a website,or how internet work and how much money i have to spend for improving a company!</p>
            <h6 className='favorite_project'>My favorite project</h6>
            <img src={English} alt="" />
            <div className='knowledges'>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
            </div>
        </div>

        <div className='sub_box'>
            <h4 className='info_text'>informatic</h4>
            <p className='info'>I Studied how to create a website,or how internet work and how much money i have to spend for improving a company!</p>
            <h6 className='favorite_project'>My favorite project</h6>
            <img src={Informatic} alt="" />
            <div className='knowledges'>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
            </div>
        </div>

        <div className='sub_box'>
            <h4 className='info_text'>Sport</h4>
            <p className='info'>I Studied how to create a website,or how internet work and how much money i have to spend for improving a company!</p>
            <h6 className='favorite_project'>My favorite project</h6>
            <img src={Informatic} alt="" />
            <div className='knowledges'>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
            </div>
        </div>

        <div className='sub_box'>
            <h4 className='info_text'>System and Networks</h4>
            <p className='info'>I Studied how to create a website,or how internet work and how much money i have to spend for improving a company!</p>
            <h6 className='favorite_project'>My favorite project</h6>
            <img src={Informatic} alt="" />
            <div className='knowledges'>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
                <p>sth</p>
            </div>
        </div>



    </div>
    );
}

export default Subjs;