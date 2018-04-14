/* exported App */

let App = React.createClass({

    getInitialState() {
        return {
            value: {
                firstName: '',
                lastName: '',
                mail: ''
            },
            contacts: [
                {
                    id: 1,
                    firstName: 'Jan',
                    lastName: 'Nowak',
                    email: 'jan.nowak@example.com',
                },
                {
                    id: 2,
                    firstName: 'Adam',
                    lastName: 'Kowalski',
                    email: 'adam.kowalski@example.com',
                },
                {
                    id: 3,
                    firstName: 'Zbigniew',
                    lastName: 'Kozioł',
                    email: 'zbigniew.koziol@example.com',
                }
            ]
        };
    },

    handleChangeFirstName: function(e) {
        let changedValue = Object.assign({}, this.state.value);
        changedValue.firstName = e.target.value;
        this.setState({
            value: changedValue
        })
    },

    handleChangeLastName: function(e) {
        let changedValue = Object.assign({}, this.state.value);
        changedValue.lastName = e.target.value;
        this.setState({
            value: changedValue
        })
    },

    handleChangeMail: function(e) {
        let changedValue = Object.assign({}, this.state.value);
        changedValue.mail = e.target.value;
        this.setState({
            value: changedValue
        })
    },

    handleSubmit: function(e) {
        e.preventDefault();
        let contact = {
            id: this.state.contacts.length + 1,
            firstName: this.state.value.firstName,
            lastName: this.state.value.lastName,
            email: this.state.value.mail
        };
        let newContacts = this.state.contacts;
        newContacts.push(contact);
        this.setState({
            contacts: newContacts,
            value: {
                firstName: '',
                lastName: '',
                mail: ''
            }
        })
    },
    
    render: function () {
        return (
             <div className={'app'}>
                <ContactForm value={this.state.value} handleChangeFirstName={this.handleChangeFirstName} handleChangeLastName={this.handleChangeLastName} handleChangeMail={this.handleChangeMail} handleSubmit={this.handleSubmit}/>
                <Contacts items={this.state.contacts}/>
            </div>
        );
    }
});