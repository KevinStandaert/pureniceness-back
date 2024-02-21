export function formatDates(modifiedData) {
  const dataToFormatted = { ...modifiedData };
  if (dataToFormatted.birthdate) {
    dataToFormatted.birthdate = dataToFormatted.birthdate.toISOString().substring(0, 10);
  }
  if (dataToFormatted.starting_date) {
    dataToFormatted.starting_date = dataToFormatted.starting_date.toISOString().substring(0, 16);
  }
  if (dataToFormatted.ending_date) {
    dataToFormatted.ending_date = dataToFormatted.ending_date.toISOString().substring(0, 16);
  }
  return dataToFormatted;
}

export function removePassword(modifiedData) {
  const dataToFormatted = { ...modifiedData };
  delete dataToFormatted.password;
  return dataToFormatted;
}
