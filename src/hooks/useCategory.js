export const translateToRus = name => {
  switch (name.trim()) {
    case 'Products':
      return 'Продукты';
    case 'Alcohol':
      return 'Алкоголь';
    case 'Entertainment':
      return 'Развлечения';
    case 'Health':
      return 'Здоровье';
    case 'Transport':
      return 'Транспорт';
    case 'Housing':
      return 'Всё для дома';
    case 'Technique':
      return 'Техника';
    case 'Communal, communication':
      return 'Коммуналка и связь';
    case 'Sports, hobbies':
      return 'Спорт и хобби';
    case 'Education':
      return 'Образование';
    case 'Other':
      return 'Прочее';
    case 'Salary':
      return 'З/П';
    case 'Additional income':
      return 'Доп. доход';
    default:
      break;
  }
};

export const translateToEng = name => {
  switch (name.trim()) {
    case 'Продукты':
      return 'Products';
    case 'Алкоголь':
      return 'Alcohol';
    case 'Развлечения':
      return 'Entertainment';
    case 'Здоровье':
      return 'Health';
    case 'Транспорт':
      return 'Transport';
    case 'Всё для дома':
      return 'Housing';
    case 'Техника':
      return 'Technique';
    case 'Коммуналка и связь':
      return 'Communal, communication';
    case 'Спорт и хобби':
      return 'Sports, hobbies';
    case 'Образование':
      return 'Education';
    case 'Прочее':
      return 'Other';
    case 'З/П':
      return 'Salary';
    case 'Доп. доход':
      return 'Additional income';
    default:
      break;
  }
};
