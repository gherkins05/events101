'use strict';
/**
 * Add your functions here...
 */


function targetTextToConsole(event) {
    console.log(event.target.textContent);
}

function tttcAttacher() {
    document.querySelector('#button0').addEventListener('click', targetTextToConsole);
}

function lovelyParaAttacher() {
    document.querySelector('#thisisalovelyparagraph').addEventListener('click', lovelyToggle);
}

function lovelyButtonAttacher() {
    document.querySelector('#button1').addEventListener('click', lovelyToggle);
}

function concatAttacher() {
    const input1 = document.querySelector('#in1');
    const input2 = document.querySelector('#in2');

    const eventListener = () => {
        document.querySelector('#out1').textContent = input1.value + input2.value;
    }

    input1.addEventListener('change', eventListener);
    input2.addEventListener('change', eventListener);
}

function snitchAttacher() {
    const mouseWatcher = document.querySelector('#mousewatcher');

    mouseWatcher.addEventListener('mouseover', snitchUpdater);
    mouseWatcher.addEventListener('mouseout', snitchUpdater);
}

function reportAttacher() {
    const mouseReporter = document.querySelector('#mousereporter');

    mouseReporter.addEventListener('mousemove', reportUpdater);
}

function reportUpdater(event) {
    const report = document.querySelector('#report');
    report.textContent = `x: ${event.screenX} y: ${event.screenY}`;
}

function idValidationAttacher() {
    const newid = document.querySelector("#newid");

    const eventListener = () => {
        if (newid.value.includes(" ")) {
            newid.classList.add("invalid");
        } else {
            newid.classList.remove("invalid");
        }
    };

    newid.addEventListener("input", eventListener); 
}