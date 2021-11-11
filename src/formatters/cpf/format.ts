export const cpf = (value: any) => {
  return String(value)
          .replace(/\D/g, '')
          .slice(0, 11)
          .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
};