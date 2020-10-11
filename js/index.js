// Pricing Switcher

const $pricing_switch = document.querySelector('.pricing-plan__switch-wrapper');
const $pricing_switch_btns = document.querySelectorAll('.pricing-plan__switch__btn');
const $value_standard = document.querySelector('#item-value-standard');
const $value_premium = document.querySelector('#item-value-premium');
const value_standard = '19.00';
const value_premium = '49.00';

$value_standard.innerHTML = value_standard;
$value_premium.innerHTML = value_premium;

$pricing_switch.addEventListener('click', (e) => {
    const target = e.target;

    // if (target && target.classList.contains === 'pricing-plan__switch__btn_yearly') {
    //     console.log(11);
    //     $value_standard.innerHTML = +value_standard * 12;
    //     $value_premium.innerHTML = +value_premium * 12;
    // } 

    if (target && target.classList.contains !== 'pricing-plan__switch__btn_active') {
        pricingSwitchDisableActive($pricing_switch_btns);
        target.classList.add('pricing-plan__switch__btn_active');
    }

    // if (target && target.classList.contains === 'pricing-plan__switch__btn_monthly') {
    //     $value_standard.innerHTML = value_standard.toString;
    //     $value_premium.innerHTML = value_premium.toString;
    // }
});


function pricingSwitchDisableActive(switch_btns) {
    switch_btns.forEach(el => {
        el.classList.remove('pricing-plan__switch__btn_active');
    });
}

// Subscribe Form

const $subscribe_form = document.querySelector('.subscribe form');
const $subscribe_submit_btn = document.querySelector('.subscribe button');

$subscribe_submit_btn.addEventListener('click', (e) => {
    e.preventDefault();
    $subscribe_form.reset();
});

// Slider

const $trust_items = document.querySelector('.trust__items');
const $trust_item = document.querySelectorAll('.trust__item');
const $slider_switcher = document.querySelector('.trust__slider__switcher');
const $switcher_indicators = document.querySelectorAll('.slider__switcher__item');

$slider_switcher.addEventListener('click', (e) => {
    const target = e.target;

    // && target.classList.contains === 'slider__switcher__item'
    
    if (target && target.classList.contains !== 'slider__switcher__item_active') {
        sliderSwitcherDisabelActive($switcher_indicators);

        target.classList.add('slider__switcher__item_active');
    }
});

// function translateSlides() {
//     for (let i = 0; i < $trust_item.length; i++) {

//     }
// }

function sliderSwitcherDisabelActive(switch_indicators) {
    switch_indicators.forEach(el => {
        el.classList.remove('slider__switcher__item_active');
    });
}