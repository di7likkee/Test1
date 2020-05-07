import React from 'react'
import '../Service/Service.styles.css'

function isEven(value) {
    return (value % 2 == 0) ? true : false;
}

export const Service = (item, index) => {
    console.log(index);
    if (isEven(index)) {
        return (
            <section class="row tm-section tm-col-md-reverse" key={item.id}>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div class="tm-flex-center p-5">
                        <div class="tm-md-flex-center">
                            <h2 class="tm-text-color-primary mb-4">Педикюр</h2>
                            <p class="mb-4">Spa-педикюр, аппаратный, классический педикюр, парафинотерапия, пилинг стоп, покрытие лаком, гель-лаками.</p>
                            <a href="#" class="btn btn-primary float-lg-right tm-md-align-center">Подробнее</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                    <img src={require('../../images/image.png')} alt="Image" class="img-fluid" />
                </div>
            </section>
        );
    } else {
        return (
            <section class="row tm-section tm-col-md-reverse">
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                    <img src={require('../../images/image1.png')} alt="Image" class="img-fluid" />
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div class="tm-flex-center p-5">
                        <div class="tm-md-flex-center">
                            <h2 class="tm-text-color-primary mb-4">Маникюр</h2>
                            <p class="mb-4">Более 40 видов услуг по уходу за руками для женщин, мужчин и детей. Персональный комплексный подход к каждому клиенту.</p>
                            <a href="#" class="btn btn-primary float-lg-right tm-md-align-center">Подробнее</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Service;

            // <div className="card" key={item.id}>
            //     <div className="card-image">
            //         <img src={item.img} alt={item.title} />
            //         <span className="card-title">{item.title}</span>
            //         <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>
            //     </div>

            //     <div className="card-content">
            //         <p>{item.desc}</p>
            //         <p><b>Price: {item.price}$</b></p>
            //     </div>
            // </div>