function Footer(){

    // var current_date = new Date.toString
    return (
        <div className="App">
            <footer>
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <h4 className="athletic">Contact Me</h4>
                <span>Address: Orlando, FL</span> <br/>
                <span>Phone: (716) 622-1976</span> <br/>
                <span>Email: soyadiaoune@gmail.com</span> <br/>
                <br/>
            </div>
            <div class="col-sm-3">
                <h4 className="athletic">Quick Links</h4>
                <ul>
                    <li><a href="/#profile">Profile</a></li>
                    <li><a href="/#skills">Skills</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#contact">Contact</a></li>  
                </ul>
            </div>
            <div class="col-sm-3">
                <h4 className="athletic">Follow Me</h4>
                <ul class="social-icons">
                    {/* <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li> */}
                    <li><a href="https://www.linkedin.com/in/soya-diaoun%C3%A9-27062089/" target='_blank'>LinkedIn</a></li>
                    <li><a href="https://devpost.com/sdiaoune" target='_blank'>Devpost</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="copyright">Copyright ©2023 Soya Diaoune. All rights reserved.</div>
</footer>
        </div>
    )
}

export default Footer;