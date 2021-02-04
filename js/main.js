const menuSections = {
  bread: [
    {
      imgClass: 'bread-34',
      name: 'Ржано-пшеничный с финиками и арахисом',
      weight: '450 г.',
      composition: 'вода, мука пш. цельнозерновая, мука пш. 1 с., финики, арахис, морская соль.'
    },
    {
      imgClass: 'bread-33',
      name: 'Безлютеновый багет',
      weight: '350 г.',
      composition: 'вода, мука из зеленой гречки, рисовая мука, крахмал тапиоки, кукурузный крахмал, шелуха подорожника, морская соль.'
    },
    {
      imgClass: 'bread-32',
      name: 'Томатный хлеб с вялеными томатами',
      weight: '450 г.',
      composition: 'томатный сок, вода, мука пш. 1 с., масло оливк., солод, орегано, морская соль, томат вяленый.'
    },
    {
      imgClass: 'bread-31',
      name: 'Хлеб с маслинами',
      weight: '260 г.',
      composition: 'вода, мука пш. 1 с., мука ржаная цельнозерновая, морская соль, маслины.'
    },
    {
      imgClass: 'bread-30',
      name: 'Пшенично-ржаной с морковью и грецким орехом',
      weight: '450 г.',
      composition: 'вода, мука пш. 1 с., мука ржаная цельнозерновая, масло подсолн., сахар, морковь, грецкий орех, морская соль, солод.'
    },
    {
      imgClass: 'bread-29',
      name: 'Симит',
      weight: '80 г.',
      composition: 'вода, мука пш. 1 с., кунжут, семена льна, мак, масло подсолн.'
    },
    {
      imgClass: 'bread-28',
      name: 'Деревенский хлеб',
      weight: '500 г.',
      composition: 'мука пш. 1 с., мука ржаная обдир., мука пш. цельнозерновая, вода, морская соль.'
    },
    {
      imgClass: 'bread-1',
      name: 'Французский багет',
      weight: '260 г.',
      composition: 'мука пш. 1 с., вода, морская соль.'
    },
    {
      imgClass: 'bread-2',
      name: 'Французский багет с вялеными томатами',
      weight: '260 г.',
      composition: 'мука пш. 1 с., вода, морская соль, вяленые томаты.'
    },
    {
      imgClass: 'bread-3',
      name: 'Французский злаковый багет',
      weight: '260 г.',
      composition: 'мука пш. 1 с., вода, морская соль, кунжут, мак, семена подсолнуха, семена льна.'
    },
    {
      imgClass: 'bread-4',
      name: 'Панини',
      weight: '100 г.',
      composition: 'мука пш. 1 с., вода, морская соль'
    },
    {
      imgClass: 'bread-5',
      name: 'Ржаной багет',
      weight: '500 г.',
      composition: 'мука ржаная, мука пш. 1 с., вода, солод, тмин, морская соль.'
    },
    {
      imgClass: 'bread-6',
      name: 'Финский ржаной хлеб',
      weight: '500 г.',
      composition: 'вода, мука пшеничная в/с, мука ржаная обдир., дробленая кукуруза, плющенные рожь, семена (льна, подсолнечника, тыквы, кунжута), солод, морская соль, кориандр .'
    },
    {
      imgClass: 'bread-9',
      name: 'Французская булка',
      weight: '500 г.',
      composition: 'мука пш. 1 с., молоко, сливочное масло, тростниковый сахар, морская соль, вода.'
    },
    {
      imgClass: 'bread-11',
      name: 'Витой злаковый',
      weight: '260 г.',
      composition: 'мука пш. 1 с., мука пш. цельнозерновая, семечки (лен, кунжут, подсолнечник), морская соль, вода.'
    },
    {
      imgClass: 'bread-13',
      name: 'Бананабрэд',
      weight: '500 г.',
      composition: 'сливочное масло, мука пш. 1 с., тростниковый сахар, куриное яйцо, какао, сметана, банан, сода.'
    },
    {
      imgClass: 'bread-14',
      name: 'Тыквенный хлеб',
      weight: '500 г.',
      composition: 'мука пш. 1 с., тыква запеченная, цельнозерновая мука, кужут, лен, мед, масло подсолн., морская соль, мука ржаная.'
    },
    {
      imgClass: 'bread-15',
      name: 'Безглютеновый хлеб',
      weight: '500 г.',
      composition: 'мука льнаная, мука рисовая, мука гречневая, крахмал кукурузный, вода, морская соль.'
    },
    {
      imgClass: 'bread-16',
      name: 'Хлеб с пармезаном и оливками',
      weight: '550 г.',
      composition: 'мука пш. 1 с., вода, мука пш. цельнозерновая, сыр "Прамезан", оливки, морская соль.'
    },
    {
      imgClass: 'bread-17',
      name: 'Хлеб со шпинатом',
      weight: '400 г.',
      composition: 'молоко, мука пш. 1 с., сливочное масло, шпинат, чеснок, морская соль, сахар.'
    },
    {
      imgClass: 'bread-18',
      name: 'Ржаной яблочный',
      weight: '400 г.',
      composition: 'мука пш. цельнозерновая, йогурт, мука ржаная, мука пш. 1 с., яблоко, сахар, морская соль, корица.'
    },
    {
      imgClass: 'bread-20',
      name: 'Хлеб с запеченным картофелем и чесноком',
      weight: '550 г.',
      composition: 'мука пш. 1 с., мука ржаная, вода, картофель запеченный, чеснок запеченный, тимьян, розмарин, базилик, шалфей, морская соль.'
    },
    {
      imgClass: 'bread-21',
      name: 'Булочки для гамбургеров',
      weight: '100 г.',
      composition: 'мука пш. 1 с., вода, сливочное масло, куриное яйцо, тростниковый сахар, кунжут, морская соль.'
    },
    {
      imgClass: 'bread-23',
      name: 'Хлеб «Три семечки»',
      weight: '550 г.',
      composition: 'мука пш. 1 с., мука пш. цельнозерновая, семечки (лен, кунжут, подсолнечник), вода, морская соль.'
    },
    {
      imgClass: 'bread-24',
      name: 'Чиабатта',
      weight: '260 г.',
      composition: 'мука пш. 1 с., вода, солод, морская соль.'
    },
    {
      imgClass: 'bread-25',
      name: 'Луковый хлеб',
      weight: '370 г.',
      composition: 'мука пш. 1 с., вода, морская соль, сушеный лук.'
    },
  ],
  pie: [
    {
      imgClass: 'pie-1',
      name: 'Пирог со свининой',
      weight: '1000 г.',
      composition: 'мука пш. 1 с., вода, свинина, лук, чеснок, морская соль.'
    },
    {
      imgClass: 'pie-2',
      name: 'Пирог с курицей и шампиньонами',
      weight: '1000 г.',
      composition: 'мука пш. 1 с., вода, куриное филе, шампиньоны, лук, чеснок, морская соль.'
    },
    {
      imgClass: 'pie-3',
      name: 'Пирог с овощами',
      weight: '1000 г.',
      composition: 'мука пш. 1 с., вода, баклажаны, перец сладкий, кабачок, лук, чеснок, морская соль.'
    },
    {
      imgClass: 'pie-4',
      name: 'Флан с куриной печенью',
      weight: '1000 г.',
      composition: 'мука пш. 1 с., молоко, печень куриная, куриное яйцо, изюм, лук, чеснок, сливки 22%, базилик, мускатный орех, морская соль.'
    },
    {
      imgClass: 'pie-5',
      name: 'Ржаной пирог с яблоками',
      weight: '1000 г.',
      composition: 'мука ржаная, вода, яблоки, корица, масло слив., сахар тростниковый, морская соль.'
    },
    {
      imgClass: 'pie-6',
      name: 'Морковный пирог',
      weight: '1000 г.',
      composition: 'мука пш. 1 с., вода, морковь, сахар тростниковый, куриное яйцо, масло подсолн., морская соль'
    },
  ],
  baking: [
    {
      imgClass: 'bakery-15',
      name: 'Орешки со сгущенкой',
      weight: '700 г.',
      composition: 'мука пш., сахар тростниковый, сахарная пудра, сливочное масло, куриное яйцо, разрыхлитель, варёная сгущенка (начинка).'
    },
    {
      imgClass: 'bakery-14',
      name: 'Кекс столичный',
      weight: '500 г.',
      composition: 'сливочное масло, мука пш., куриное яйцо, тростниковый сахар, ванилин, изюм, разрыхлитель, морская соль.'
    },
    {
      imgClass: 'bakery-13',
      name: 'Штоллен',
      weight: '770 г.',
      composition: 'мука пш., мед, молоко, куриное яйцо, морская соль, сливочное масло, ванилин, марципан, миндальный орех, курага, изюм, цукаты апельсина, имбирь, ананас, бадьян, ром.'
    },
    {
      imgClass: 'puff_1',
      name: 'Слойка с ветчиной, сыром и соусом бешамель',
      weight: '110 г.',
      composition: 'слоеное тесто, куриное яйцо, ветчина, сыр выдержаный, молоко коровье, сливочное масло, мука пш. 1 с., соль морская, смесь перцев, мускатный орех.'
    },
    {
      imgClass: 'puff_1',
      name: 'Слойка со шпинатом и сыром фета',
      weight: '110 г.',
      composition: 'слоеное тесто, куриное яйцо, сыр фета, шпинат, соль морская, смесь перцев.'
    },
    {
      imgClass: 'puff_1',
      name: 'Слойка "Лобиани"',
      weight: '110 г.',
      composition: 'слоеное тесто, куриное яйцо, фасоль, морковь, лук, томат, соль морская, смесь перцев.'
    },
    {
      imgClass: 'puff_1',
      name: 'Слойка "Пеновани"',
      weight: '110 г.',
      composition: 'слоеное тесто, куриное яйцо, сыр адыгейский, сыр сулугуни, сливочное масло, соль морская.'
    },
    {
      imgClass: 'pie-7',
      name: 'Пирожок "Лобиани"',
      weight: '90 г.',
      composition: 'мука пш. 1 с., молоко, сливочное масло, куриное яйцо, фасоль, морковь, лук, томат, соль морская, смесь перцев.'
    },
    {
      imgClass: 'pie-7',
      name: 'Пирожок с яблоком',
      weight: '90 г.',
      composition: 'яблоко, имбирь, корица, мука пш. 1 с., молоко, сливочное масло, куриное яйцо.'
    },
    {
      imgClass: 'pie-7',
      name: 'Пирожок с картошкой',
      weight: '90 г.',
      composition: 'картофель, грибы, молоко, сливочное масло, масло подсолн., мука пш. 1 с., куриное яйцо.'
    },
    {
      imgClass: 'pie-7',
      name: 'Пирожок с капустой',
      weight: '90 г.',
      composition: 'капуста, морковь, молоко, сливочное масло, мука пш. 1 с., куриное яйцо.'
    },
    {
      imgClass: 'pie-8',
      name: 'Рулетики с говядиной',
      weight: '125 г.',
      composition: 'говядина, фасоль, масло оливк., перец белый, лук, слоёное тесто, куриное яйцо, морская соль.'
    },
    {
      imgClass: 'pie-8',
      name: 'Рулетики с фалафелем',
      weight: '125 г.',
      composition: 'нут, масло оливк., перец красный, кориандр, перец чили, шпинат, тахини, йогурт натуральный, мята, кинза, лук, слоёное тесто, куриное яйцо, морская соль.'
    },
    {
      imgClass: 'bakery-1',
      name: 'Сконы с шоколадом',
      weight: '1000 г.',
      composition: 'мука пш. 1 с., сливочное масло, куриное яйцо, молоко, сливки 35%, сахар тростниковый, морская соль, шоколад молочный или горький.'
    },
    {
      imgClass: 'bakery-2',
      name: 'Бискотти',
      weight: '1000 г.',
      composition: 'мука пш. 1 с., сахар тростниковый, куриное яйцо, какао, курага (или - изюм, барбарис, ирга, клюква, вишня), арахис, морская соль, ваниль.'
    },
    {
      imgClass: 'bakery-4',
      name: 'Синнабон',
      weight: '150 г.',
      composition: 'мука пш. 1 с., сливочное масло, куриное яйцо, яблоко, корица, сахар, маскарпоне.'
    },
    {
      imgClass: 'bakery-5',
      name: 'Шокобон',
      weight: '130 г.',
      composition: 'мука пш. 1 с., сливочное масло, куриное яйцо, яблоко, маскарпоне, сахар, какао-порошок.'
    },
    {
      imgClass: 'bakery-6',
      name: 'Шоколадное печенье с кокосом',
      weight: '1000 г.',
      composition: 'мука пш. 1 с., сливочное масло, сахар, куриное яйцо, како порошок, кокосовая стружка.'
    },
    {
      imgClass: 'bakery-7',
      name: 'Овсяное печенье с орехами и шоколадом',
      weight: '1000 г.',
      composition: 'мука пш. 1 с., сливочное масло, куриное яйцо, тростниковый сахар, хлопья овсяные, шоколад, орехи.'
    },
    {
      imgClass: 'bakery-8',
      name: 'Лимонные маффины с маком',
      weight: '75 г.',
      composition: 'мука пш. 1 с., сахар, куриное яйцо, сливочное масло, лимонный сок, цедра лимона, мак.'
    },
    {
      imgClass: 'bakery-9',
      name: 'Шоколадные маффины с бананом',
      weight: '75 г.',
      composition: 'мука пш. 1 с., сахар, какао, куриное яйцо, сливочное масло, банан, шоколад.'
    },
    {
      imgClass: 'bakery-10',
      name: 'Маффины с штрейзелем и ягодой по сезону',
      weight: '75 г.',
      composition: 'мука пш. 1 с., сливочное масло, куриное яйцо, сахар, молоко, йогурт, ягоды.'
    },
    {
      imgClass: 'bakery-11',
      name: 'Маффины с сюрпризом',
      weight: '75 г.',
      composition: 'мука пш. 1 с., сливочное масло, куриное яйцо, сахар, сюрприз.'
    },
    {
      imgClass: 'bakery-12',
      name: 'Морковные маффины',
      weight: '75 г.',
      composition: 'мука пш. 1 с., хлопья овсяные, куриное яйцо, сахар, морковь, масло подсолнеч.'
    }
  ],
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
