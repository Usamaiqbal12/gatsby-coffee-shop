import React from 'react'
import Title from '../Globals/Title'
export default function Contact() {
    return (
        <section className="contact py-5">
            <Title title="Contact Us" />
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="Jhon smith"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" name="email" id="email" placeholder="Jhonsmith@gmail.com"/>
                            </div>


                            <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" cols="30" rows="5" className="form-control" placeholder="your description here"></textarea>
                            </div>

                            <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5"> Submit</button>


                    </form>
                </div>
            </div>
        </section>
    )
}
