import type Language from './Language';

/**
 * Objeto com os dados da pessoa estudante na aplicação.
 *
 * A maior parte das pessoas estudantes ainda não definiu seu idioma.
 */
type Student = {
  id: string;
  // ...
  language?: Language;
};

export default Student;
