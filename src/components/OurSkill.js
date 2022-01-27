export default function OurSkill(){
    return (
        <div className="skills">
        <div className="container">
            <div className="section-header">
                <h2>Our Skills</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac lacus eget nunc imperdiet 
                </p>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="skill-item">
                        <h3>Front End Skills</h3>
                        <div className="skill-name">
                            <p>HTML</p><p>85%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        
                        <div className="skill-name">
                            <p>CSS</p><p>95%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        
                        <div className="skill-name">
                            <p>jQuery</p><p>80%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="skill-item">
                        <h3>Back End Skills</h3>
                        <div className="skill-name">
                            <p>PHP</p><p>90%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        
                        <div className="skill-name">
                            <p>Laravel</p><p>85%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        
                        <div className="skill-name">
                            <p>MySQL</p><p>95%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}