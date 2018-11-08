function wrapCharacters(element) {
    $(element).contents().each(function() {
        if(this.nodeType === 1) {
            wrapCharacters(this);
        }
        else if(this.nodeType === 3) {
            $(this).replaceWith($.map(this.nodeValue.split(''), function(c) {
               return '<span>' + c + '</span>';
            }).join(''));
        }
    });
}    