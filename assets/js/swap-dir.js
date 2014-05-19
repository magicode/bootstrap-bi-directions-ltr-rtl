

(function() {
  var stylesheet = false;

  function swapDirection() {
    if (!stylesheet){
      var linkList = document.getElementsByTagName('link');
      for (var i = 0;i < linkList.length ;i++){
        if ((/bootstrap/).test(linkList[i].href)){
          stylesheet = linkList[i];
          break;
        }
      }
    }
    if (!stylesheet) return;
    if ((/\-rtl/i).test(stylesheet.href))
      stylesheet.href = stylesheet.href.replace('-rtl','');
    else
      stylesheet.href = stylesheet.href.replace('bootstrap','bootstrap-rtl');
  }
  window.addEventListener('load',function() {
    var swapDirectionDiv = document.createElement('div');
    swapDirectionDiv.setAttribute('style',
    'position: fixed;z-index: 9999;left: -48px; width: 243px; -webkit-transform: rotate(-45deg); top: 48px;' +
    'background-color: white;border: 1px solid #A7A7A7;text-align: center;font-family: sans-serif;' +
    'font-size: 18px;box-shadow: 1px 1px 32px  rgba(0, 0, 0, 0.64);');
    swapDirectionDiv.innerHTML = 'Swap Direction';
    document.body.appendChild(swapDirectionDiv);
    swapDirectionDiv.addEventListener('click',swapDirection);
  });
})();
