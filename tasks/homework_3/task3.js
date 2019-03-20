const popExt = (arr) => {
  const extArr = arr.map(function(file){
    const dotIndex = file.lastIndexOf('.');
    return file.substr(dotIndex);
  });

  const map = extArr.reduce((obj, ext) => {
    obj[ext] = (obj[ext] || 0) + 1;
    return obj;
  }, {});

  const maxCount = Math.max(...Object.values(map));
  const mostFrequent = Object.keys(map).filter(ext => map[ext] === maxCount);

  return mostFrequent.sort();
}

console.log(popExt(['crazy.pr', 'black-and-white.als', 'illegal.wav',
'exultant.mp3', 'exotic.jar', 'capricious.pt', 'abundant.ala',
'eatable.zbrush', 'careful.py', 'godly.css', 'clever.txt', 'dusty.maya',
'awesome.zbrush', 'discreet.jar', 'creepy.h', 'fair.pt', 'descriptive.mp3',
'boundless.ala', 'berserk.xml', 'hungry.exe', 'awful.exe']))
