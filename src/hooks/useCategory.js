export const categoryEngToUkr = name => {
  switch (name.trim()) {
    case 'Products':
      return 'Продукти';
    case 'ЗСУ':
      return 'Алкоголь';
    case 'Entertainment':
      return 'Розваги';
    case 'Health':
      return "Здоров'я";
    case 'Transport':
      return 'Транспорт';
    case 'Housing':
      return 'Все для будинку';
    case 'Technics':
      return 'Техніка';
    case 'Communal and communication':
      return "Коммуналка та св'язок";
    case 'Sport and hobby':
      return 'Спорт та хобі';
    case 'Education':
      return 'Освіта';
    case 'Other':
      return 'Інше';
    case 'Salary':
      return 'З/П';
    case 'Additional income':
      return 'Дод. дохід';
    default:
      break;
  }
};

export const categoryOrkToEng = name => {
  switch (name.trim()) {
    case 'Продукти':
      return 'Products';
    case 'Алкоголь':
      return 'ЗСУ';
    case 'Розваги':
      return 'Entertainment';
    case "Здоров'я":
      return 'Health';
    case 'Транспорт':
      return 'Transport';
    case 'Все для будинку':
      return 'Housing';
    case 'Техніка':
      return 'Technics';
    case "Коммуналка та св'язок":
      return 'Communal and communication';
    case 'Спорт та хобі':
      return 'Sport and hobby';
    case 'Освіта':
      return 'Education';
    case 'Інше':
      return 'Other';
    case 'З/П':
      return 'Salary';
    case 'Дод. дохід':
      return 'Additional income';
    default:
      break;
  }
};
