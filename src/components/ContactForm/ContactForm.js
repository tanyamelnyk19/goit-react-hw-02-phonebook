// import { Component } from "react";

// export default class ContactForm extends Component {
//     state = {
//         name: '',
//         number: '',
//       };

//       handleChange = e => {
//         this.setState({
//           [e.target.name]: e.target.value,
//         });
//       };

//       handleSubmit = evt => {
//         evt.preventDefault();
//         const contact = {
//           id: uuidv4(),
//           name: this.state.name,
//           number: this.state.number,
//         };

//         const contactInPhonebook = this.state.contacts.some(contact=>
//           contact.name.toLowerCase() === this.state.name.toLowerCase()
//         );
//         console.log(contactInPhonebook);
//         if (contactInPhonebook) {
//           alert(`${this.state.name} is already in contacts.`)
//         } else {
//           this.setState(prevState => {
//             return {
//               contacts: [...prevState.contacts, contact],
//             };
//           });
//         }

//         this.resetForm();
//       };

//       resetForm = () => {
//         this.setState({ name: '', number: '', filter: '' });
//       };
// }
