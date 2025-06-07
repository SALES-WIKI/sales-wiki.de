document.addEventListener('DOMContentLoaded', function () {

    function paymentPeriodChanged(e) {
        updatePrices(e.target.id);
    }

    function updatePrices(paymentPeriod) {
        window.sw_pricing.forEach(pricing => {

            document
                .getElementById(pricing.priceElemId)
                .innerText = pricing[paymentPeriod].price;

            document
                .getElementById(pricing.periodElemId)
                .innerText = pricing[paymentPeriod].period;

        });
    }

    updatePrices('full');

    Array.from(document.querySelectorAll('.multiswitch input[type=radio]'))
        .forEach(radio => {
            radio.addEventListener('change', paymentPeriodChanged);
        });

});


/**
 Configuration example for the website:

<script>
        window.sw_pricing = [
            { // SBTS
                priceElemId: "sbts-p",
                periodElemId: "sbts-d",

                full: { price: "10.499", period: '' },
                'split-6': { price: "1.749", period: '/ Monat' },
                'split-12': { price: "874", period: '/ Monat' },
                'split-24': { price: "437", period: '/ Monat' },
            },

            { // SB
                priceElemId: "sb-p",
                periodElemId: "sb-d",

                full: { price: "5.527", period: '' },
                'split-6': { price: "917", period: '/ Monat' },
                'split-12': { price: "459", period: '/ Monat' },
                'split-24': { price: "229", period: '/ Monat' },
            },

            { // 3-M
                priceElemId: "p3m-p",
                periodElemId: "p3m-d",

                full: { price: "837", period: '' },
                'split-6': { price: "279", period: '/ Monat' },
                'split-12': { price: "279", period: '/ Monat' },
                'split-24': { price: "279", period: '/ Monat' },
            }
        ];
        
    </script>
 */