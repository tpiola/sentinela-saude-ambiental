import type { CSSProperties } from "react";

/**
 * Campo de texto do formulário de avaliação — cantos retos, altura 48px.
 * @startingPoint section="Formulários" subtitle="Campo e select retos com erro" viewport="700x160"
 */
export interface TextFieldProps {
  id: string;
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  /** Mensagem em vermelho + aria-invalid. */
  error?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
  style?: CSSProperties;
}

export interface SelectFieldProps extends Omit<TextFieldProps, "autoComplete"> {
  options: readonly string[];
  placeholder?: string;
}

export declare function TextField(props: TextFieldProps): JSX.Element;
export declare function SelectField(props: SelectFieldProps): JSX.Element;
