import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { StyledH2 } from './App.styled';

export const App = () => {
  return (
    <>
      <StyledH2>Phonebook</StyledH2>
      <Form />
      <StyledH2>Contacts</StyledH2>
      <Filter />
      <Contacts />
    </>
  );
};
