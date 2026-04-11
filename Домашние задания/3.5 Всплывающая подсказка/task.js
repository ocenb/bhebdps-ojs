const tooltips = document.querySelectorAll('.has-tooltip');
const activeTooltip = document.createElement('div');

activeTooltip.classList.add('tooltip');
document.body.appendChild(activeTooltip);

tooltips.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    if (
      activeTooltip.classList.contains('tooltip_active') &&
      activeTooltip.textContent === elem.title
    ) {
      activeTooltip.classList.remove('tooltip_active');
      return;
    }

    activeTooltip.textContent = elem.title;
    activeTooltip.classList.add('tooltip_active');

    const position = elem.dataset.position || 'bottom';
    const coords = elem.getBoundingClientRect();

    let top;
    let left;

    switch (position) {
      case 'top':
        top = coords.top - activeTooltip.offsetHeight - 5;
        left = coords.left;
        break;
      case 'left':
        top = coords.top;
        left = coords.left - activeTooltip.offsetWidth - 5;
        break;
      case 'right':
        top = coords.top;
        left = coords.right + 5;
        break;
      default:
        top = coords.bottom + 5;
        left = coords.left;
        break;
    }

    activeTooltip.style.top = `${top + window.scrollY}px`;
    activeTooltip.style.left = `${left + window.scrollX}px`;
  });
});

window.addEventListener('scroll', () => {
  activeTooltip.classList.remove('tooltip_active');
});
