import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

class RecptchaTest extends Component {

    onChangeCaptcha = (value) => {
        console.log("Captcha value:", value);
    }

    render() {

        return (
            <div>
                <div>
                <ReCAPTCHA
                    sitekey="6LeSfa4UAAAAAP4XxvzIimGdOokgNmp5N0o97v_z"
                    onChange={this.onChangeCaptcha}
                />
                </div>
            </div>
        )
    }
}

export default RecptchaTest;