$(document).ready(function() {
    let display = $('#display'); 

   
    $('.number, .decimal').click(function() {
        let currentDisplay = display.text();
        let newValue = $(this).text();
    
        if (newValue === '.') {
            
            if (!currentDisplay.includes('.')) {
                display.text(currentDisplay + newValue);
            }
        } else {
            if (currentDisplay === '0') {
                display.text(newValue);
            
        } else {display.text(currentDisplay + newValue);
            }
        }
    });
    

    $('.add, .subtract, .multiply, .divide').click(function() {
        let currentDisplay = display.text();
        let operator = $(this).text();

        if (!currentDisplay.endsWith('+') && !currentDisplay.endsWith('-') && !currentDisplay.endsWith('*') && !currentDisplay.endsWith('/')) {
            display.text(currentDisplay + operator);
        }
    });

    $('.equals').click(function() {
        let calculation = display.text();
        try {
            let result = eval(calculation);
            display.text(result);
        } catch (e) {
            display.text('Error');
        }
    });


    $('.all.clear').click(function() {
        display.text('0');
    });


    $('.zero').not('.double').click(function() {
        let currentDisplay = display.text();
        if (currentDisplay !== '0') { 
            display.text(currentDisplay + '0');
        }
    });


    $('.double.zero').click(function() {
        let currentDisplay = display.text();
        if (currentDisplay !== '0') { 
            display.text(currentDisplay + '00');
        }
    });

    
    $('.decimal').click(function() {
        let currentDisplay = display.text();
        if (!currentDisplay.includes('.')) { 
            display.text(currentDisplay + '.');
        }
    });
});


