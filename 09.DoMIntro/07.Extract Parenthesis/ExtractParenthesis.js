function extract(content) {
    const contentElement = document.getElementById('content');

    let stringContent = '';

    let flag = false;

    let stringList =[];

    for (let i = 0; i < contentElement.textContent.length; i++) {
        if(contentElement.textContent.charAt(i) === ')') {
            flag = false;
            stringList.push(stringContent);
        }

        if(flag) {
            stringContent += contentElement.textContent[i];
        }

        if(contentElement.textContent.charAt(i) === '(') {
            flag = true;
        }
    }

    return stringList.join('; ');

}