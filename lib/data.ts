const ProductList = [
  '漂珠转砖',
  '高强高铝保温砖',
  '蛭石保温砖',
  '陶瓷蛭石隔热板',
  '微孔高强低导热砖',
  '莫来石保温砖',
  '高铝聚轻砖',
  '035超轻绝热保温砖',
  '绝缘发泡转',
  '防渗砖',
].map((item, index) => ({
  id: index + 1,
  name: item,
  href: '/products'
}));

export default ProductList