import styled from 'styled-components';

const Container = styled.div`
  padding-top: 0.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #1f2937; 
`;

const Input = styled.input`
  background-color: #f9fafb; 
  border: 1px solid #d1d5db; 
  color: #111827; 
  font-size: 0.875rem;
  border-radius: 0.5rem; 
  padding: 0.625rem 1rem; 
  width: 100%;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.5); 
  outline: none;
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.5); 
  }
`;

export const TextInput = ({
    placeholder,
    onChange,
    label
}: {
    placeholder: string;
    onChange: (value: string) => void;
    label: string;
}) => {
    return (
        <Container>
            <Label>{label}</Label>
            <Input
                onChange={(e) => onChange(e.target.value)}
                type="text"
                placeholder={placeholder}
            />
        </Container>
    );
};
