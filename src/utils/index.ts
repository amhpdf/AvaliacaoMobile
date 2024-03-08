import { format, parseISO } from 'date-fns';
import {ptBR} from 'date-fns/locale';

export const formatDate = (dateString: string) => {
  const parsedDate = parseISO(dateString);
  return format(parsedDate, "dd MMM yy", { locale: ptBR });
};
