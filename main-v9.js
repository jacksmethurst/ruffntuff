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

// when .scroll-wrap-item comes into view horizontally, add class .active
document.querySelector('ul.scroll-wrap').addEventListener('scroll', function() {
	var scrollLeft = this.scrollLeft;
	var scrollWidth = this.scrollWidth;
	var clientWidth = this.clientWidth;
	var scrollPercent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
	var scrollItems = document.querySelectorAll('.scroll-wrap-item');
	var scrollItemCount = scrollItems.length;
	var scrollItemWidth = 100 / scrollItemCount;
	var scrollItemIndex = Math.floor(scrollPercent / scrollItemWidth);
	var scrollItem = scrollItems[scrollItemIndex];
	if (scrollItem) {
		scrollItem.classList.add('active');
	}
}
);