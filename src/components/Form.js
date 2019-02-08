import React from 'react';

const styleOfInput = {width: '100%'};

const Form = props => (
    <form onSubmit={props.getWeather}>
        <div className={'row justify-content-md-center'}>
            <div className={'col-xs-12 col-sm-12 col-md-8'}>
                <input className={'form-control'} type="text" name={'city'} placeholder={'City...'} style={styleOfInput}/>
                <input className={'form-control'} type="text" name={'country'} placeholder={'Country...'} style={styleOfInput}/>
            </div>
            <div className={'col-xs-12 col-sm-12 col-md-4'}>
                <button className={'btn btn-outline-light btn-block'}>Get Weather</button>
            </div>
        </div>
    </form>
);

export default Form;
