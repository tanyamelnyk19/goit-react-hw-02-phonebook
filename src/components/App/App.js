import { Component } from 'react';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import contactsData from '../../contactsData/contacts.json';

class App extends Component {
  state = {
    contacts: contactsData,
    filter: '',
  };

  handleFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleSubmit = newContact => {
    const contactInPhonebook = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (contactInPhonebook) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredName = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilter={this.handleFilter} />
        <ContactList
          filteredName={filteredName}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
