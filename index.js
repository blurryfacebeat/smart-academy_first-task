"use strict";

var $pricing_switch = document.querySelector('.pricing-plan__switch-wrapper');
var $pricing_switch_btns = document.querySelectorAll('.pricing-plan__switch__btn');
var $value_standard = document.querySelector('#item-value-standard');
var $value_premium = document.querySelector('#item-value-premium');
var value_standard = '19.00';
var value_premium = '49.00';
$value_standard.innerHTML = value_standard;
$value_premium.innerHTML = value_premium;
$pricing_switch.addEventListener('click', function (e) {
  var target = e.target;
  pricingSwitchDisableActive($pricing_switch_btns); // if (target && target.classList.contains === 'pricing-plan__switch__btn_yearly') {
  //     console.log(11);
  //     $value_standard.innerHTML = +value_standard * 12;
  //     $value_premium.innerHTML = +value_premium * 12;
  // } 

  if (target && target.classList.contains !== 'pricing-plan__switch__btn_active') {
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
}