
interface Record {
  [key: string]: any;
}

export const exportToExcel = (data: Array<Record>) => {
  if (data.length === 0) {
    return ;
  }
  let fileContent = '';
  const keys = Object.keys(data[0]);
  fileContent += keys.join(', ');
  fileContent += '\n';
  for (let item of data) {
    let str = '';
    str += keys.map(key => item[key]).join(', ');
    str += '\n';
    fileContent += str;
  }

  const blob = new Blob([fileContent], {type: 'text/csv'});
  const a = document.createElement("a");
  a.href = window.URL.createObjectURL(blob);
  a.download = 'export.csv';
  a.click();
}
