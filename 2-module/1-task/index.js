function sumSalary(salaries) {
  sum = 0;
  for (let entry in salaries) {
      if (typeof salaries[entry] == 'number' && isFinite(salaries[entry])) {
          sum = sum + salaries[entry];
      }
  }
  return sum;
}
