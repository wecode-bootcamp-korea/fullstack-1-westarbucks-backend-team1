const drinksInfoList = (req, res) => {
  res.json({
    DRINKS_DATA: [
      {
        id: 1,
        korean_name: '나이트로 바닐라 크림',
        english_name: 'Nitro Vanilla Cream',
        category_name: '콜드 브루',
      },
      {
        id: 2,
        korean_name: '아이스 커피',
        english_name: 'Iced Coffee',
        category_name: '브루드 커피',
      },
      {
        id: 3,
        korean_name: '에스프레소 콘 파나',
        english_name: 'Espresso Con Panna',
        category_name: '에스프레소',
      },
      {
        id: 4,
        korean_name: '제주 까망 크림 프라푸치노',
        english_name: 'Jeju Black Sesame Cream Frappuccino',
        category_name: '프라푸치노',
      },
      {
        id: 5,
        korean_name: '민트 초콜릿 칩 블렌디드',
        english_name: 'Mint Chocolate Chip Blended',
        category_name: '블렌디드',
      },
    ],
  });
};

export default drinksInfoList;
