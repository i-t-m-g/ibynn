function SubscribeSection() {
    return ( 
    <div className="section no-padding-vertical wf-section">
        <div className="wrapper side-paddings">
                <div data-w-id="e89551e9-b5ae-51a6-c418-02c90497790c" className="subscribe">
                <div className="subscribe-info">
                <div className="subscribe-icon">
                <img src="images/paperplane-icon-white.svg" alt="" />
                </div>
                <h4>
                Subscribe to our newsletter
                <br />
                &amp; get <span className="text-green">10% discount!</span>
                </h4>
                </div>
                <div className="subscribe-form-wrapper w-form">
                <form
                id="wf-form-Subscribe-Form"
                name="wf-form-Subscribe-Form"
                data-name="Subscribe Form"
                method="get"
                className="subscribe-form"
                >
                <input
                    type="email"
                    className="input subscribe-input w-input"
                    maxLength={256}
                    name="email-2"
                    data-name="Email 2"
                    placeholder="Enter your email address"
                    id="email-2"
                    required=""
                />
                <input
                    type="submit"
                    defaultValue="Subscribe"
                    data-wait="Please wait..."
                    className="button w-button"
                />
                </form>
                <div className="form-success w-form-done">
                <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="form-error w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
                </div>
                </div>
                </div>
        </div>
    </div>



     );
}

export default SubscribeSection;