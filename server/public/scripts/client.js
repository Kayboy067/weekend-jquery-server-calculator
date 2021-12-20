$(document).ready(onReady);

function onReady() {
    console.log("jquery is loaded!");

    $('#calcForm').on('submit', submitNumber);
    $('.signBtn').on('click', equationButton);
    refresh();
}
// creating a default function to stop reload
function submitNumber(event) {
    event.preventDefault();
    
    console.log('in submitNumber');

    let numberInput = {
        numberInputOne: $('#calcNumOne').val(),
        signBtn: mathElement,
        numberInputTwo: $('#calcNumTwo').val(),
        sum: 0
    };
    console.log('numberInput', numberInput.numberInputOne, numberInput.numberInputTwo);
    console.log($('.signBtn').data('sign'));

    // setup the endpoint (AJAX)

    $.ajax({
        method: 'POST',
        url: '/equalto',
        data: numberInput
    })
        .then((response) => {
        console.log('POST response', response);
        console.log('POST numberInput', numberInput);
        refresh();
    })
    $('#numberInputOne').val('')
    $('#numberInputTwo').val('')
} // end function submitNumber

let mathElement = '';
let operator = ''
function equationButton() {
    mathElement = $(this).data('sign');
    console.log('equationButton', mathElement);
} // end function

function refresh() {
    console.log('in refresh');
    $.ajax({
        method: 'GET',
        url: '/equalto'
    })
        .then((response) => {
            console.log('In AJAX GET', response);
            render(response);
        })     
} // end refresh function

// creating a function to render data to DOM
function render(array) {
    $('#hist').empty();
    // loop through an array to append data to DOM
    for (let object of array) {
        $('#hist').append(`
        ${object.numberInputOne} ${object.signBtn} ${object.numberInputTwo} = ${object.sum}
        `)  
    }
    
} // end render function


