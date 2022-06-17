import './subj.css';
import Goldoni from "../img/goldoni.png";
import English from "../img/ing.png";
import Informatic from "../img/inf.png";
import gpo from "../img/gpo.jpg";
import calc from "../img/calc.png";
import sport from "../img/sport.jpg";


function Subjs(){
    return(
    <div className='sub'>
            <hr />
        <div className='sub_box'>
            <h4 className='info_text'>Italian</h4>
            <p className='info'>Italian literature is written in the Italian language, particularly within Italy. It may also refer to literature written by Italians or in other languages spoken in Italy</p>
            <h6 className='favorite_project'>My favorite project</h6>
            <img src={Goldoni} alt="" />
            <p className='name_img'>Goldoni Project</p>
            <div className='knowledges'>
                <p>applying knowledge autonomously</p>
                <p>good exposure</p>
                <p>linguistic property</p>
                <p>meticulous analysis</p>
                <p>understand implications</p>
                <p>relational identifications in a correct way</p>
            </div>
        </div>

        <div className='sub_box'>
            <h4 className='info_text'>Gpo</h4>
            <p className='info'>it is the reorganization of the multidisciplinary skills and knowledge acquired by the Student</p>
            <h6 className='favorite_project'>My favorite project</h6>
            <img src={gpo} alt="" />
            <div className='knowledges'>
                <p>differentiation between projects</p>
                <p>Timing</p>
                <p>maintenance</p>
                <p>project time</p>
            </div>
        </div>

        <div className='sub_box'>
            <h4 className='info_text'>English</h4>
            <p className='info'>I Studied how to create a website,or how internet work and how much money i have to spend for improving a company!</p>
            <h6 className='favorite_project'>My favorite project</h6>
            <img src={English} alt="" />
            <div className='knowledges'>
                <p>fluid exposure</p>
                <p>specific languages</p>
                <p>huge vocabulary</p>
            </div>
        </div>

        <div className='sub_box'>
            <h4 className='info_text'>informatic</h4>
            <p className='info'>I Studied how to create a website,or how internet work and how much money i have to spend for improving a company!</p>
            <h6 className='favorite_project'>My favorite project</h6>
            <img src={Informatic} alt="" />
            <div className='knowledges'>
                <p>Problem Solving</p>
                <p>MarkUp</p>
                <p>knowledge of languages</p>
                <p>project analysis skills</p>
            </div>
        </div>

        <div className='sub_box'>
            <h4 className='info_text'>Physical education</h4>
            <p className='info'>I Studied how to create a website,or how internet work and how much money i have to spend for improving a company!</p>
            <h6 className='favorite_project'>My favorite project</h6>
            <img src={sport} alt="" />
            <div className='knowledges'>
                <p>workout settings</p>
                <p>human body knowledge</p>
                <p>Knowledge of sports regulations</p>
            </div>
        </div>

        <div className='sub_box'>
            <h4 className='info_text'>System and Networks</h4>
            <p className='info'>I Studied how to create a website,or how internet work and how much money i have to spend for improving a company!</p>
            <h6 className='favorite_project'>My favorite project</h6>
            <img src={calc} alt="" />
            <div className='knowledges'>
                <p>Security</p>
                <p>skills about networks</p>
                <p>knowledge of internal and external threats</p>
            </div>
        </div>



    </div>
    );
}

export default Subjs;