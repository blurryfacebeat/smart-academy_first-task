// Pricing Switcher

const $pricing_switch = document.querySelector('.pricing-plan__switch-wrapper');
const $pricing_switch_btns = document.querySelectorAll('.pricing-plan__switch__btn');

$pricing_switch.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains !== 'pricing-plan__switch__btn_active') {
        pricingSwitchDisableActive($pricing_switch_btns);
        target.classList.add('pricing-plan__switch__btn_active');
    }
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

$switcher_indicators.forEach((el, i) => {
    el.addEventListener('click', () => {
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
    switch_indicators.forEach(el => {
        el.classList.remove('slider__switcher__item_active');
    });
}