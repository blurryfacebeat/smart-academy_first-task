"use strict";

// Pricing Switcher
var $pricing_switch = document.querySelector('.pricing-plan__switch-wrapper');
var $pricing_switch_btns = document.querySelectorAll('.pricing-plan__switch__btn');
$pricing_switch.addEventListener('click', function (e) {
  var target = e.target;

  if (target && target.classList.contains !== 'pricing-plan__switch__btn_active') {
    pricingSwitchDisableActive($pricing_switch_btns);
    target.classList.add('pricing-plan__switch__btn_active');
  }
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
$switcher_indicators.forEach(function (el, i) {
  el.addEventListener('click', function () {
    sliderSwitcherDisabelActive($switcher_indicators);

    if (i === 0) {
      $trust_item[0].style.display = 'block';
      $trust_item[1].style.display = 'block';
      $trust_item[2].style.display = 'block';
    }

    if (i === 1) {
      $trust_item[0].style.display = 'none';
      $trust_item[1].style.display = 'block';
      $trust_item[2].style.display = 'block';
    }

    if (i === 2) {
      $trust_item[0].style.display = 'none';
      $trust_item[1].style.display = 'none';
      $trust_item[2].style.display = 'block';
    }

    el.classList.add('slider__switcher__item_active');
  });
});

function sliderSwitcherDisabelActive(switch_indicators) {
  switch_indicators.forEach(function (el) {
    el.classList.remove('slider__switcher__item_active');
  });
}