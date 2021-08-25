import type Language from './Language';

/**
 * Objeto com os dados da escola disponível no contexto da aplicação.
 */
type School = {
  id: string;
  language: Language;
};

export default School;
