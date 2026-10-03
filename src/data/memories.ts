export type MemoryKind = 'frames' | 'calls' | 'film' | 'together' | 'portraits' | 'cats' | 'sunny' | 'magic' | 'books' | 'calendar' | 'tv' | 'elephant';
export interface Memory { id:string; episode:string; category:MemoryKind; carrier:'frame'|'polaroid'|'filmstrip'|'contact-sheet'|'tv'; asset:string; alt:string; backText:string; priority:number; }
export const episodeTitles:Record<MemoryKind,string>={frames:'zxy的温馨小屋',calls:'喂？',film:'小小日常',together:'动物聚会',portraits:'一个人的旅行',cats:'many cats',sunny:'今天有太阳',magic:'一点魔法',books:'小屋书架',calendar:'今天与明天',tv:'涂鸦放映',elephant:'象象'};
const gallery:[string,MemoryKind,string,string][]=[
 ['01-cozy-house', 'frames', '一间六十平米的温馨小屋，屋内摆着沙发、小熊与零食家具。', ''],
  ['02-Teddy-Birthday', 'frames', '五只毛茸茸小熊围坐桌边，蛋糕上立着三根细蜡烛。', ''],
  ['03-Pup-Cake', 'together', '几只小狗环绕蛋糕，糖果小花点缀在图画各处。', ''],
  ['04-Bunny-Bunch', 'together', '散落的玩偶与花饰，小兔小鸭并排坐着，点缀满星星与爱心。', ''],
  ['05-Star-Boat', 'portraits', '白兔驾小船游荡星海，人类，快帮我接住掉落的星星。', ''],
  ['06-Moon-Float', 'portraits', '小兔趴在云层望着圆月，人类，这颗月亮可以借我。', ''],
  ['07-Blue-Mushroom', 'portraits', '蓝蘑菇撑着圆圆的小伞，站在梦里悄悄等一场小精灵来。', ''],
  ['08-Pastel-Lily', 'portraits', '淡紫百合轻轻展开花瓣，把一个整夏天的香气藏进花蕊里。', ''],
  ['09-orange-cat', 'cats', '一只圆滚滚的涂鸦橘猫，不是胖，是呼噜声有体积。', ''],
  ['10-many-cats', 'cats', '五只挤在一起的歪歪猫，人类，请再加五个坐垫。', ''],
  ['11-Shimmer-Blue', 'portraits', '蓝灰肌理的蝴蝶停驻，翅面晕开粉、白与浅黄的色块。', ''],
  ['12-Cloud-Elephant', 'portraits', '云朵围成一圈，小象探出脑袋，人类，和我一起接住这场小雨。', ''],
  ['13-cake', 'sunny', '点着一根蜡烛的小蛋糕', '不用等特别的日子，今天就很好。']
];
export const memories:Memory[]=gallery.map(([file,category,alt,backText],i)=>({id:`doodle-${i+1}`,episode:episodeTitles[category],category,carrier:category==='frames'?'frame':'polaroid',asset:`./memories/${file}.webp`,alt,backText,priority:5}));
export const photo=(index:number)=>memories[((index-1)%memories.length+memories.length)%memories.length];
export {albums} from './photo-collections';
export const callFragments=[
 {time:'叮铃 01',line:'喂？这里是发呆热线20061013。',aside:''},
 {time:'叮铃 02',line:'今天的云，看起来像一块吐司。',aside:''},
 {time:'叮铃 03',line:'你的新宠物小猫说它正在忙。\n忙着什么也不做。',aside:''},
 {time:'叮铃 04',line:'热水烧好了。\n给自己倒一杯吧。',aside:''},
 {time:'叮铃 05',line:'如果暂时没主意，\n就先看看窗外。',aside:''},
 {time:'叮铃 06',line:'小屋收到。\n你的愿望正在发芽。',aside:''},
 {time:'叮铃 07',line:'好啦，去摸摸猫吧。\n它在等你。',aside:''},
];
export const birthdayLetter=[
 '给偶然走进小屋的你：',
 '这里的照片有点画歪了，猫也圆得不太讲道理。没关系，小屋不负责完美，只负责让你歇一会儿。',
 '你可以把晴天留久一点，也可以让窗外下一场小雪。想说话的时候，拨一下电话；不想说话的时候，和猫一起坐着也很好。',
 '抽屉里的星星偶尔会逃跑，咖啡可能有点凉，书页里还夹着没读完的故事。每件小东西，都愿意陪你慢慢发现。',
 '愿你接下来的日子有好睡眠、有好胃口，有想做的小事，也有什么都不做的自由。',
 '书架上有我爱看的书，你也可以塞点喜欢的',
 '下次来，小屋的灯还会亮着。',
];
