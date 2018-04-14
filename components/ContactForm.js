/* exported ContactForm */
let ContactForm = React.createClass({
  
    render: function() {
        return (
            <form className={'contactForm'} onSubmit={this.props.handleSubmit}>
                <input type={'text'} placeholder={'Imię'} value={this.props.value.firstName} onChange={this.props.handleChangeFirstName}/>
                <input type={'text'} placeholder={'Nazwisko'} value={this.props.value.lastName} onChange={this.props.handleChangeLastName}/>
                <input type={'email'} placeholder={'Email'} value={this.props.value.mail} onChange={this.props.handleChangeMail}/>
                <button type={'submit'}>Dodaj kontakt</button>
            </form>
        );
    }
});