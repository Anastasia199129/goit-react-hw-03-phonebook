import React from 'react';
import { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from './App.css';
import ContactForm from './components/contactForm/ContactForm';
import Filter from './components/filter/Filter';
import ContactList from './components/contactList/ContactList';
import Title from './components/title/Title';

class App extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const getContacts = localStorage.getItem('contacts');
    const parsContacts = JSON.parse(getContacts);
    console.log(parsContacts);
    if (parsContacts) {
      this.setState({ contacts: parsContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHendler = data => {
    this.state.contacts.find(n => n.name === data.name)
      ? alert(`${data.name} already exists`)
      : this.setState(prevState => ({
          contacts: [{ id: shortid.generate(), ...data }, ...prevState.contacts],
        }));
  };

  onButtonDeleteClick = id => {
    this.setState({
      contacts: this.state.contacts.filter(obj => obj.id !== id),
    });
  };
  onChangeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
    return (
      <div className={s.container}>
        <Title text="Phoneboock" />
        <ContactForm propOnSubmit={this.formSubmitHendler} list={this.state.contacts} />
        <Title text="Contacts" />
        <Filter value={this.state.filter} onChange={this.onChangeFilter} />
        <ContactList filtred={filteredContacts} onButtonDeleteClick={this.onButtonDeleteClick} />
      </div>
    );
  }
}

export default App;
