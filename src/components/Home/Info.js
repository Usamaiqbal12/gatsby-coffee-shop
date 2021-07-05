import React from 'react'
import {Link} from 'gatsby'

import Title from '../Globals/Title'
export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="our Story"/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi repudiandae alias esse quibusdam harum, fuga omnis expedita facere beatae doloremque a dolorem molestias iusto. Soluta nisi doloribus libero fugit, sed adipisci dignissimos dolorum repellat officia inventore nemo veniam, laudantium enim aperiam ipsa vel sint a dicta? Aliquid ratione sequi reiciendis.
                        </p>

                        <Link to='/about'>
                            <button className="btn text--uppercase btn-yellow">about page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
