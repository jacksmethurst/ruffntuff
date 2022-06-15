// give body overflow-y: hidden;
document.body.style.overflowY = 'hidden';

// give ul.scroll-wrap width: max-content;
document.querySelector('ul.scroll-wrap').style.width = 'max-content';

// give ul.scroll-wrap overflow: hidden;
document.querySelector('ul.scroll-wrap').style.overflow = 'hidden';

// give ul.scroll-wrap overflow-x: scroll;
document.querySelector('ul.scroll-wrap').style.overflowX = 'scroll';

// give ul.scroll-wrap display: flex;
document.querySelector('ul.scroll-wrap').style.display = 'flex';

// hide scrollbar on ul.scroll-wrap
document.querySelector('ul.scroll-wrap').addEventListener('wheel', transformScroll);

// Scroll change to horizontal

function transformScroll(event) {
  if (!event.deltaY) {
    return;
  }

  event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
  event.preventDefault();
}

var element = document.scrollingElement || document.documentElement;
element.addEventListener("wheel", transformScroll);