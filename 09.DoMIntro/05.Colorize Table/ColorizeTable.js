function colorize() {
    const colorElements = document.querySelectorAll('table tr:nth-child(2n)');

    for (const colorElement of colorElements) {

        colorElement.style.backgroundColor = 'teal';

    }
}