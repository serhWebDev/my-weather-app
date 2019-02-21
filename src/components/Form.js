import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';

const styleOfForm = {width: '100%'};

const Form = props => (
    <form onSubmit={props.getWeather}>
        <div className={'row justify-content-md-center'}>
            <div className={'col s12 m7'}>
                <input
                    className={'form-control'}
                    type="text"
                    name={'city'}
                    placeholder={'City...'}
                    style={styleOfForm}/>
                <input
                    className={'form-control'}
                    type="text"
                    name={'country'}
                    placeholder={'Country...'}
                    style={styleOfForm}/>
            </div>
            <div className={'col 12 s12 m5'}>
                <button
                    className={'btn orange darken-4 btn-block'}
                    style={styleOfForm}
                >Get Weather</button>
            </div>
        </div>
    </form>
);

export default Form;
