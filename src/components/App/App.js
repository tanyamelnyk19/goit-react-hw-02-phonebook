import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };

    const contactInPhonebook = this.state.contacts.some(
      contact => contact.name.toLowerCase() === this.state.name.toLowerCase(),
    );
    console.log(contactInPhonebook);
    if (contactInPhonebook) {
      alert(`${this.state.name} is already in contacts.`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '', filter: '' });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { name, number, filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredName = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>

        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={this.handleChange}
        />

        <ul>
          {filteredName.map(({ id, name, number }) => (
            <li key={id}>
              <span>
                {name}: {number}
              </span>
              <button onClick={() => this.deleteContact(id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
