if(/localhost/.exec(window.location.href)) {
  var head = document.createElement('div');
  head.style.backgroundColor = '#FF0040'
  head.textContent = 'This is local server.'
  document.body.insertBefore(head,document.body.firstChild)
}
