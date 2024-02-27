// on birthdate updates, toISOString() method returned a day before in our case
// so we use date-fns library to format the date
import { format } from 'date-fns';

export function formatDates(modifiedData) {
  const dataToFormatted = { ...modifiedData };
  if (dataToFormatted.birthdate) {
    dataToFormatted.birthdate = format(dataToFormatted.birthdate, 'yyyy-MM-dd');
  }
  if (dataToFormatted.starting_date) {
    dataToFormatted.starting_date = format(dataToFormatted.starting_date, 'yyyy-MM-dd HH:mm');
  }
  if (dataToFormatted.ending_date) {
    dataToFormatted.ending_date = format(dataToFormatted.ending_date, 'yyyy-MM-dd HH:mm');
  }
  return dataToFormatted;
}

export function removePassword(modifiedData) {
  const dataToFormatted = { ...modifiedData };
  delete dataToFormatted.password;
  return dataToFormatted;
}
