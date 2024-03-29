$(window).scroll(function() {
  $('.iphone, .section__social h2, .line--dotted').toggleClass('js-fixedPos', $('html').scrollTop() >= 400 );
});

//On click of input area, stop auto typing
$('.intro-form').on('click', function(){
  $('.input-words').css('display', 'none');
});

//MAKE THIS ALOT NICER 
$('.text-box--1').hover(function(){
  $('.screen').removeClass('opened');
  $('.line--dotted').css('opacity','0');
  $('.iphone__screen--1').addClass('opened');
  $(this).find($('.line--dotted')).css('opacity','1');
});

$('.text-box--2').hover(function(){
  $('.screen').removeClass('opened');
  $('.line--dotted').css('opacity','0');
  $('.iphone__screen--2').addClass('opened');
  $(this).find($('.line--dotted')).css('opacity','1');
});

$('.text-box--3').hover(function(){
  $('.screen').removeClass('opened');
  $('.line--dotted').css('opacity','0');
  $('.iphone__screen--3').addClass('opened');
  $(this).find($('.line--dotted')).css('opacity','1');
});

$('.text-box--4').hover(function(){
  $('.screen').removeClass('opened');
  $('.line--dotted').css('opacity','0');
  $('.iphone__screen--4').addClass('opened');
  $(this).find($('.line--dotted')).css('opacity','1');
});

//RETYPING
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};