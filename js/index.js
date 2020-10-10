const $pricing_switch = document.querySelector('.pricing-plan__switch-wrapper');
const $pricing_switch_btns = document.querySelectorAll('.pricing-plan__switch__btn');
const $value_standard = document.querySelector('#item-value-standard');
const $value_premium = document.querySelector('#item-value-premium');
const value_standard = '19.00';
const value_premium = '49.00';

$value_standard.innerHTML = value_standard;
$value_premium.innerHTML = value_premium;

$pricing_switch.addEventListener('click', function(e) {
    const target = e.target;
    
    pricingSwitchDisableActive($pricing_switch_btns);

    // if (target && target.classList.contains === 'pricing-plan__switch__btn_yearly') {
    //     console.log(11);
    //     $value_standard.innerHTML = +value_standard * 12;
    //     $value_premium.innerHTML = +value_premium * 12;
    // } 

    if (target && target.classList.contains !== 'pricing-plan__switch__btn_active') {
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