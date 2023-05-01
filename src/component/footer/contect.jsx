import React from 'react'
import './Contect.css'
import imgbg from '../../img/footerimg.png'

const contect = () => {
    return (
        <div>
            <div className='contect'>
                <div className="cont_title">
                    <h1>Contect Me</h1>
                </div>
                <div className="form_box">
                    <div className="forms">
                        <form >
                            <div>
                                <label>Name</label>
                            </div>
                            <div>
                                <input type="text" />
                            </div>

                            <div>
                                <label>Email</label>
                            </div>
                            <div>
                                <input type="email" />
                            </div>

                            <div>
                                <label>Message</label>
                            </div>
                            <div>
                                <textarea name="" id="" cols="30" rows="10" className='ms'></textarea>
                            </div>
                            <div className="btn">
                                <button>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="socailmedia">
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-envelope-fill"></i>
                </div>
                <h6>Aryan web 20023</h6>
            </div>
            <div className="img">
                <img src={imgbg} alt="" />
            </div>
        </div>
    )
}

export default contect