const menuSections = {
  bread: [
    {
      imgClass: 'bread-29',
      name: 'Симит',
      description: '',
      weight: '80 г.',
      composition: 'вода, мука пш. в/с, кунжут, семена льна, мак, масло подсолн.'
    },
    {
      imgClass: 'bread-27',
      name: 'Рисовые заварные булочки',
      description: '',
      weight: '80 г.',
      composition: 'мука рисовая, мука пш. в/с, свекольный сок, масло подсолн., морская соль, черный кунжут.'
    },
    {
      imgClass: 'bread-28',
      name: 'Деревенский хлеб',
      description: '',
      weight: '500 г.',
      composition: 'мука пш. в/с, мука ржаная обдир., мука пш. цельнозерновая, вода, морская соль.'
    },
    {
      imgClass: 'bread-1',
      name: 'Французский багет',
      description: 'Традиционный французский багет с хрустящей корочкой и нежным мякишем.',
      weight: '260 г.',
      composition: 'мука пш. в/с, вода, морская соль.'
    },
    {
      imgClass: 'bread-2',
      name: 'Французский багет с вялеными томатами',
      description: 'Французский багет с неповторимым вкусом вяленых томатов.',
      weight: '260 г.',
      composition: 'мука пш. в/с, вода, морская соль, вяленые томаты.'
    },
    {
      imgClass: 'bread-3',
      name: 'Французский злаковый багет',
      description: 'Французский багет с добавлением злаков.',
      weight: '260 г.',
      composition: 'мука пш. в/с, вода, морская соль, кунжут, мак, семена подсолнуха, семена льна.'
    },
    {
      imgClass: 'bread-4',
      name: 'Панини',
      description: 'Это классические итальянские булочки, можно наполнять начинками по своему выбору.',
      weight: '100 г.',
      composition: 'мука пш. в/с, вода, морская соль'
    },
    {
      imgClass: 'bread-5',
      name: 'Ржаной багет',
      description: 'Хрустящая корочка и небольшое количество мягкого ароматного мякиша.',
      weight: '500 г.',
      composition: 'мука ржаная, мука пш. в/с, вода, солод, тмин, морская соль.'
    },
    {
      imgClass: 'bread-6',
      name: 'Финский ржаной хлеб',
      description: 'Хлеб многозерновой содержит цельные злаковые зерна, потому витамины и микроэлементы, имеющиеся в семенах, сохраняются. Многозерновой хлеб имеет множество витаминов: группы В, Е, Н и РР. Так же хлеб обогащен химическими\ элементами: калием, натрием, молибденом, фосфором, йодом, железом и кальцием, поэтому он так полезен.',
      weight: '500 г.',
      composition: 'вода, мука пшеничная в/с, мука ржаная обдир., дробленая кукуруза, плющенные рожь, семена (льна, подсолнечника, тыквы, кунжута), солод, морская соль, кориандр .'
    },
    {
      imgClass: 'bread-7',
      name: 'Легкий ржаной с грецким орехом и курагой',
      description: 'Этот ржаной хлеб вкусен и полезен для здоровья. Используется 72% ржаной муки, а оставшуюся часть составляет пшеничная мука.',
      weight: '500 г.',
      composition: 'мука пш. в/с, мука ржаная, морская соль, грецкий орех, курага, вода.'
    },
    {
      imgClass: 'bread-8',
      name: 'Мельницкий хлеб',
      description: '',
      weight: '500 г.',
      composition: 'мука пш. в/с, мука ржаная, мука пш. цельнозерновая, вода, морская соль.'
    },
    {
      imgClass: 'bread-9',
      name: 'Французская булка',
      description: 'Изумительный аромат и знаменитая хорошо пропеченная хрустящая корочка. Любителям «багетного» мякиша посвящается!',
      weight: '500 г.',
      composition: 'мука пш. в/с, молоко, сливочное масло, тростниковый сахар, морская соль, вода.'
    },
    // {
    //   imgClass: 'bread-10',
    //   name: 'Хлеб с полбой',
    //   description: 'Вкусный, ароматный, с явным ореховым послевкусием!',
    //   weight: '500 г.',
    //   composition: 'мука полбяная, мука пш. цельнозерновая, морская соль, вода.'
    // },
    {
      imgClass: 'bread-11',
      name: 'Витой злаковый',
      description: '',
      weight: '260 г.',
      composition: 'мука пш. в/с, мука пш. цельнозерновая, семечки (лен, кунжут, подсолнечник), морская соль, вода.'
    },
    {
      imgClass: 'bread-12',
      name: 'Пшеничный с семолиной',
      description: '',
      weight: '500 г.',
      composition: 'мука пш. в/с, вода, семола, морская соль.'
    },
    {
      imgClass: 'bread-13',
      name: 'Бананабрэд',
      description: '',
      weight: '500 г.',
      composition: 'сливочное масло, мука пш. в/с, тростниковый сахар, куриное яйцо, какао, сметана, банан, сода.'
    },
    {
      imgClass: 'bread-14',
      name: 'Тыквенный хлеб',
      description: '',
      weight: '500 г.',
      composition: 'мука пш. в/с, тыква запеченная, цельнозерновая мука, кужут, лен, мед, масло подсолн., морская соль, мука ржаная.'
    },
    {
      imgClass: 'bread-15',
      name: 'Безглютеновый хлеб',
      description: '',
      weight: '500 г.',
      composition: 'мука льнаная, мука рисовая, мука гречневая, крахмал кукурузный, вода, морская соль.'
    },
    {
      imgClass: 'bread-16',
      name: 'Хлеб с пармезаном и оливками',
      description: '',
      weight: '550 г.',
      composition: 'мука пш. в/с, вода, мука пш. цельнозерновая, сыр "Прамезан", оливки, морская соль.'
    },
    {
      imgClass: 'bread-17',
      name: 'Хлеб со шпинатом',
      description: '',
      weight: '400 г.',
      composition: 'молоко, мука пш. в/с, сливочное масло, шпинат, чеснок, морская соль, сахар.'
    },
    {
      imgClass: 'bread-18',
      name: 'Ржаной яблочный',
      description: '',
      weight: '400 г.',
      composition: 'мука пш. цельнозерновая, йогурт, мука ржаная, мука пш. в/с, яблоко, сахар, морская соль, корица.'
    },
    {
      imgClass: 'bread-19',
      name: 'Хлеб с инжиром',
      description: '',
      weight: '550 г.',
      composition: 'мука пш. в/с, мука ржаная, вода, инжир, курага, морская соль.'
    },
    {
      imgClass: 'bread-20',
      name: 'Хлеб с запеченным картофелем и чесноком',
      description: 'Картофельный хлеб с чесноком и прованскими травами. При изготовлении используется мука собственного помола.',
      weight: '550 г.',
      composition: 'мука пш. в/с, мука ржаная, вода, картофель запеченный, чеснок запеченный, тимьян, розмарин, базилик, шалфей, морская соль.'
    },
    {
      imgClass: 'bread-21',
      name: 'Булочки для гамбургеров',
      description: '',
      weight: '100 г.',
      composition: 'мука пш. в/с, вода, сливочное масло, куриное яйцо, тростниковый сахар, кунжут, морская соль.'
    },
    {
      imgClass: 'bread-22',
      name: 'Вермонтский хлеб',
      description: 'Это хороший «повседневный» хлеб на пшеничной закваске! Он настолько хорош, что нравится всем.',
      weight: '500 г.',
      composition: 'мука пш. в/с, мука ржаная цельнозерновая, вода, морская соль.'
    },
    {
      imgClass: 'bread-23',
      name: 'Хлеб «Три семечки»',
      description: 'Пшеничный хлеб на закваске с добавлением ржаной цельнозерновой муки, семян льна, подсолнечника и кунжута.',
      weight: '550 г.',
      composition: 'мука пш. в/с, мука пш. цельнозерновая, семечки (лен, кунжут, подсолнечник), вода, морская соль.'
    },
    {
      imgClass: 'bread-24',
      name: 'Чиабатта',
      description: '',
      weight: '260 г.',
      composition: 'мука пш. в/с, вода, солод, морская соль.'
    },
    {
      imgClass: 'bread-25',
      name: 'Луковый хлеб',
      description: '',
      weight: '370 г.',
      composition: 'мука пш. в/с, вода, морская соль, сушеный лук.'
    },
    {
      imgClass: 'bread-26',
      name: 'Амарантовый хлеб',
      description: '',
      weight: '260 г.',
      composition: 'мука амарантовая, мука пш. 1 сорт, соль морская, вода.'
    }
  ],
  pie: [
    {
      imgClass: 'pie-7',
      name: 'Пирожки с яблоком',
      description: '',
      weight: '90 г.',
      composition: 'яблоко, имбирь, корица, мука пш. в/с, молоко, сливочное масло, куриное яйцо.'
    },
    {
      imgClass: 'pie-7',
      name: 'Пирожки с картошкой',
      description: '',
      weight: '90 г.',
      composition: 'картофель, грибы, молоко, масло сливочное, масло подсолн., мука пш. в/с, куриное яйцо.'
    },
    {
      imgClass: 'pie-7',
      name: 'Пирожки с капустой',
      description: '',
      weight: '90 г.',
      composition: 'капуста, морковь, молоко, масло сливочное, мука пш. в/с, куриное яйцо.'
    },
    {
      imgClass: 'pie-8',
      name: 'Рулетики с говядиной',
      description: '',
      weight: '125 г.',
      composition: 'говядина, фасоль, масло оливк., перец белый, лук, слоёное тесто, куриное яйцо, морская соль.'
    },
    {
      imgClass: 'pie-8',
      name: 'Рулетики с фалафелем',
      description: '',
      weight: '125 г.',
      composition: 'нут, масло оливк., перец красный, кориандр, перец чили, шпинат, тахини, йогурт натуральный, мята, кинза, лук, слоёное тесто, куриное яйцо, морская соль.'
    },
    {
      imgClass: 'pie-1',
      name: 'Пирог со свининой',
      description: '',
      weight: '1000 г.',
      composition: 'мука пш. в/с, вода, свинина, лук, чеснок, морская соль.'
    },
    {
      imgClass: 'pie-2',
      name: 'Пирог с курицей и шампиньонами',
      description: '',
      weight: '1000 г.',
      composition: 'мука пш. в/с, вода, куриное филе, шампиньоны, лук, чеснок, морская соль.'
    },
    {
      imgClass: 'pie-3',
      name: 'Пирог с овощами',
      description: '',
      weight: '1000 г.',
      composition: 'мука пш. в/с, вода, баклажаны, перец сладкий, кабачок, лук, чеснок, морская соль.'
    },
    {
      imgClass: 'pie-4',
      name: 'Флан с куриной печенью',
      description: '',
      weight: '1000 г.',
      composition: 'мука пш. в/с, молоко, печень куриная, куриное яйцо, изюм, лук, чеснок, сливки 22%, базилик, мускатный орех, морская соль.'
    },
    {
      imgClass: 'pie-5',
      name: 'Ржаной пирог с яблоками',
      description: '',
      weight: '1000 г.',
      composition: 'мука ржаная, вода, яблоки, корица, масло слив., сахар тростниковый, морская соль.'
    },
    {
      imgClass: 'pie-6',
      name: 'Морковный пирог',
      description: '',
      weight: '1000 г.',
      composition: 'мука пш. в/с, вода, морковь, сахар тростниковый, куриное яйцо, масло подсолн., морская соль'
    },
  ],
  baking: [
    {
      imgClass: 'bakery-1',
      name: 'Сконы с шоколадом',
      description: '',
      weight: '1000 г.',
      composition: 'мука пш. в/с, сливочное масло, куриное яйцо, молоко, сливки 35%, сахар тростниковый, морская соль, шоколад молочный или горький.'
    },
    {
      imgClass: 'bakery-2',
      name: 'Бискотти',
      description: '',
      weight: '1000 г.',
      composition: 'мука пш. в/с, сахар тростниковый, куриное яйцо, какао, курага (или - изюм, барбарис, ирга, клюква, вишня), арахис, морская соль, ваниль.'
    },
    {
      imgClass: 'bakery-3',
      name: 'Полбяное печенье',
      description: '',
      weight: '1000 г.',
      composition: ''
    },
    {
      imgClass: 'bakery-4',
      name: 'Синнабон',
      description: '',
      weight: '150 г.',
      composition: 'мука пш. в/с, сливочное масло, куриное яйцо, яблоко, корица, сахар, маскарпоне.'
    },
    {
      imgClass: 'bakery-5',
      name: 'Шокобон',
      description: '',
      weight: '130 г.',
      composition: 'мука пш. в/с, сливочное масло, куриное яйцо, яблоко, маскарпоне, сахар, какао-порошок.'
    },
    {
      imgClass: 'bakery-6',
      name: 'Шоколадное печенье с кокосом',
      description: '',
      weight: '1000 г.',
      composition: 'мука пш. в/с, сливочное масло, сахар, куриное яйцо, како порошок, кокосовая стружка.'
    },
    {
      imgClass: 'bakery-7',
      name: 'Овсяное печенье с орехами и шоколадом',
      description: '',
      weight: '1000 г.',
      composition: 'мука пш. в/с, масло сливочное, куриное яйцо, тростниковый сахар, хлопья овсяные, шоколад, орехи.'
    },
    {
      imgClass: 'bakery-8',
      name: 'Лимонные маффины с маком',
      description: '',
      weight: '75 г.',
      composition: 'мука пш. в/с, сахар, куриное яйцо, сливочное масло, лимонный сок, цедра лимона, мак.'
    },
    {
      imgClass: 'bakery-9',
      name: 'Шоколадные маффины с бананом',
      description: '',
      weight: '75 г.',
      composition: 'мука пш. в/с, сахар, какао, куриное яйцо, сливочное масло, банан, шоколад.'
    },
    {
      imgClass: 'bakery-10',
      name: 'Маффины с штрейзелем и ягодой по сезону',
      description: '',
      weight: '75 г.',
      composition: 'мука пш. в/с, сливочное масло, куриное яйцо, сахар, молоко, йогурт, ягоды.'
    },
    {
      imgClass: 'bakery-11',
      name: 'Маффины с сюрпризом',
      description: '',
      weight: '75 г.',
      composition: 'мука пш. в/с, сливочное масло, куриное яйцо, сахар, сюрприз.'
    },
    {
      imgClass: 'bakery-12',
      name: 'Морковные маффины',
      description: '',
      weight: '75 г.',
      composition: 'мука пш. в/с, хлопья овсяные, куриное яйцо, сахар, морковь, масло подсолнеч.'
    }
  ]
}

function showItem(e) {
  if (e) {
    e.preventDefault();
  }

  const searchParams = location.search.replace('?', '').split('&') || [];
  const productParam = searchParams.map(param => param.split('=')).filter(param => param.includes('product'));
  const urlProduct = productParam.length === 1 && productParam[0].length === 2 ? productParam[0][1] : '';
  const userProduct = e ? e.currentTarget.dataset.product : urlProduct || 'bread';

  console.log(userProduct);

  window.history.pushState('', '', `${location.origin}${location.pathname}?product=${userProduct}`);
  document.body.className = '--' + userProduct;

  const tabs = document.querySelectorAll('.menu-section__list__item') || [];
  tabs.forEach((tab) => tab.classList.remove('--active'));
  document.querySelector('[data-product="' + userProduct + '"]').classList.add('--active');
}

function initItems() {
  let i, k, parent, child, name, menuSectionsItem, menuSectionsNames;
  menuSectionsNames = Object.keys(menuSections);

  for (i = 0; i < menuSectionsNames.length; i += 1) {
    name = menuSectionsNames[i];
    menuSectionsItem = menuSections[name];

    parent = document.createElement('ul');
    parent.className = "menu__list --" + name;

    for (k = 0; k < menuSectionsItem.length; k += 1) {
      child = document.querySelector('.menu__list__item').cloneNode(true);
      child.querySelector('.menu__list__item__img').classList.add(menuSectionsItem[k].imgClass);
      child.querySelector('.menu__list__item__name').innerHTML = menuSectionsItem[k].name;
      // child.querySelector('.menu__list__item__description').innerHTML = menuSectionsItem[k].description;
      child.querySelector('.menu__list__item__composition__value').innerHTML = menuSectionsItem[k].composition;
      child.querySelector('.menu__list__item__weight__value').innerHTML = menuSectionsItem[k].weight;

      parent.appendChild(child);
    }

    document.querySelector('.menu').appendChild(parent);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initItems();
  showItem();

  const tabs = document.querySelectorAll('.menu-section__list__item') || [];
  tabs.forEach((tab) => tab.addEventListener('click', showItem));
});