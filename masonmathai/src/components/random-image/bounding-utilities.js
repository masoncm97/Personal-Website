let global = window;

global.params = { sep: 80, randOff: 700 };

let randInt = (min, max) => Math.floor(min + Math.random() * (max - min));

export const boxCollides = (box, boxes, parBound, sep) => {

  let b1 = getBound(box);

  // Make sure `box` doesn't stick outside its `parBound`
  if (parBound) {
    if ((b1.x - b1.hw) < (parBound.x - parBound.hw)
      || (b1.x + b1.hw) > (parBound.x + parBound.hw)
      || (b1.y - b1.hh) < (parBound.y - parBound.hh)
      || (b1.y + b1.hh) > (parBound.y + parBound.hh))
      return true;
  }

  // Make sure `box` doesn't overlap any other box
  for (let box2 of boxes) {

    if (box === box2) continue;

    let b2 = getBound(box2);

    let sepX = Math.max(b1.x, b2.x) - Math.min(b1.x, b2.x);
    let sepY = Math.max(b1.y, b2.y) - Math.min(b1.y, b2.y);

    // If there isn't sufficient separation on either axis there's a collision
    if (sepX < (b1.hw + b2.hw + sep) && sepY < (b1.hh + b2.hh + sep)) return true;

  }

  return false;

};

export const getBound = (elem, isRoot) => {
  let { width, height } = elem.getBoundingClientRect();
  //console.log(elem);
  //console.log(elem.getBoundingClientRect());

  return {
    x: isRoot ? width >> 1 : (parseInt(elem.style.left) || 0),
    y: isRoot ? height >> 1 : (parseInt(elem.style.top) || 0),
    w: width,
    h: height,
    hw: width >> 1, // half-width
    hh: height >> 1 // half-height
  };
};

export const reposition = (boxes, { sep = 50, randOff = 10 } = global.params) => {
    boxes = [...boxes].sort(function () { return Math.random() - 0.5; });

    //console.log(boxes[0]);
    //console.log(boxes[0].parentNode);
    let parBound = getBound(boxes[0].parentNode, true);

    // Consider the 1st box "ready"; position it in the center
    Object.assign(boxes[0].style, { left: `${parBound.x}px`, top: `${parBound.y}px`, position: `absolute` });

    // Start counting at 1 (since 1 box is initially "ready")
    for (let numReady = 1; numReady < boxes.length; numReady++) {

      let box = boxes[numReady];
      let b = getBound(box);


      // Use a counting loop to prevent too many attempts
      for (let attempts = 0; attempts < 500; attempts++) {

        // The bound of a random ready box
        let b2 = getBound(boxes[randInt(0, numReady)]);
        // console.log(b2);

        let side = randInt(0, 4);             // Randomly pick side to align to
        let off = randInt(-randOff, randOff); // Calculate random offset for `box`...
        let [x, y] = [0, 0];              // We'll calculate `x` and `y` next...

        // Align left
        if (side === 0) [x, y] = [b2.x - (b2.hw + b.hw + sep), b2.y + off];

        // Align right
        if (side === 1) [x, y] = [b2.x + (b2.hw + b.hw + sep), b2.y + off];

        // Align top
        if (side === 2) [x, y] = [b2.x + off, b2.y - (b2.hh + b.hh + sep)];

        // Align bottom
        if (side === 3) [x, y] = [b2.x + off, b2.y + (b2.hh + b.hh + sep)];

        Object.assign(box.style, { left: `${x}px`, top: `${y}px`, position: `absolute`});

        // Check if `box` now collides any of the ready boxes. If it doesn't,
        // we've successfully positioned it and `box` is ready!
        if (!boxCollides(box, boxes.slice(0, numReady), parBound, sep)) break;
      }
    }
};

export const shuffleWidth = (boxes) => {
  for(const box of boxes) {
    let off = randInt(100, 500);
    Object.assign(box.style, { width: `${off}px`});
  }
};