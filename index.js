"use strict";

// Pricing Switcher
var $pricing_switch = document.querySelector('.pricing-plan__switch-wrapper');
var $pricing_switch_btns = document.querySelectorAll('.pricing-plan__switch__btn');
var $value_standard = document.querySelector('#item-value-standard');
var $value_premium = document.querySelector('#item-value-premium');
var value_standard = '19.00';
var value_premium = '49.00';
$value_standard.innerHTML = value_standard;
$value_premium.innerHTML = value_premium;
$pricing_switch.addEventListener('click', function (e) {
  var target = e.target; // if (target && target.classList.contains === 'pricing-plan__switch__btn_yearly') {
  //     console.log(11);
  //     $value_standard.innerHTML = +value_standard * 12;
  //     $value_premium.innerHTML = +value_premium * 12;
  // } 

  if (target && target.classList.contains !== 'pricing-plan__switch__btn_active') {
    pricingSwitchDisableActive($pricing_switch_btns);
    target.classList.add('pricing-plan__switch__btn_active');
  } // if (target && target.classList.contains === 'pricing-plan__switch__btn_monthly') {
  //     $value_standard.innerHTML = value_standard.toString;
  //     $value_premium.innerHTML = value_premium.toString;
  // }

});

function pricingSwitchDisableActive(switch_btns) {
  switch_btns.forEach(function (el) {
    el.classList.remove('pricing-plan__switch__btn_active');
  });
} // Subscribe Form


var $subscribe_form = document.querySelector('.subscribe form');
var $subscribe_submit_btn = document.querySelector('.subscribe button');
$subscribe_submit_btn.addEventListener('click', function (e) {
  e.preventDefault();
  $subscribe_form.reset();
}); // Slider

var $trust_items = document.querySelector('.trust__items');
var $trust_item = document.querySelectorAll('.trust__item');
var $slider_switcher = document.querySelector('.trust__slider__switcher');
var $switcher_indicators = document.querySelectorAll('.slider__switcher__item');
$slider_switcher.addEventListener('click', function (e) {
  var target = e.target; // && target.classList.contains === 'slider__switcher__item'

  if (target && target.classList.contains !== 'slider__switcher__item_active') {
    sliderSwitcherDisabelActive($switcher_indicators);
    target.classList.add('slider__switcher__item_active');
  }
}); // function translateSlides() {
//     for (let i = 0; i < $trust_item.length; i++) {
//     }
// }

function sliderSwitcherDisabelActive(switch_indicators) {
  switch_indicators.forEach(function (el) {
    el.classList.remove('slider__switcher__item_active');
  });
}