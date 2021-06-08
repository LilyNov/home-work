const liEls = document.getElementsByTagName('li');

    for (let li of liEls) {
      let item = li.getElementsByTagName('li').length;
      if (item) {
      li.firstChild.data += ' [' + item + ']';
    }
}