export const shelfBooks = [
  { id: 'hp1', title: '哈利·波特与魔法石', spine: '魔法石', author: 'J. K. 罗琳', volume: 'I', color: '#60432e', family: 'magic', note: '故事开始的地方。' },
  { id: 'hp2', title: '哈利·波特与密室', spine: '密室', author: 'J. K. 罗琳', volume: 'II', color: '#354b42', family: 'magic', note: '决定我们成为什么样的人，是是我们的选择而非能力。' },
  { id: 'hp3', title: '哈利·波特与阿兹卡班的囚徒', spine: '阿兹卡班的囚徒', author: 'J. K. 罗琳', volume: 'III', color: '#3d4551', family: 'magic', note: '如果有时间转换器，你想再回哪一天？' },
  { id: 'hp4', title: '哈利·波特与火焰杯', spine: '火焰杯', author: 'J. K. 罗琳', volume: 'IV', color: '#6b3b33', family: 'magic', note: '有些冒险，要和朋友一起。' },
  { id: 'hp5', title: '哈利·波特与凤凰社', spine: '凤凰社', author: 'J. K. 罗琳', volume: 'V', color: '#665a39', family: 'magic', note: '来一份唱唱反调。' },
  { id: 'hp6', title: '哈利·波特与混血王子', spine: '混血王子', author: 'J. K. 罗琳', volume: 'VI', color: '#3d5148', family: 'magic', note: '爱是最伟大的魔法。' },
  { id: 'hp7', title: '哈利·波特与死亡圣器', spine: '死亡圣器', author: 'J. K. 罗琳', volume: 'VII', color: '#5a4539', family: 'magic', note: '不要畏惧死亡，希望我们理解死亡并能支配死亡。' },
  { id: 'second-sex', title: '第一炉香', spine: '第一炉香', author: '张爱玲', volume: '', color: '#654438', family: 'thought', note: '隔着半透明的蓝绸伞，千万粒雨珠闪着光，像一天的星。' },
  { id: 'misogyny', title: '厌女', spine: '厌女', author: '上野千鹤子', volume: '', color: '#4a5040', family: 'thought', note: '一个人要怎样听见自己的声音。' },
  { id: 'feminism', title: '从零开始的女性主义', spine: '从零开始的女性主义', author: '上野千鹤子 · 田房永子', volume: '', color: '#866746', family: 'thought', note: '女性自由。' },
] as const;
export type ShelfBook = typeof shelfBooks[number];
