const text1 = "Lors de mon stage, j’ai appris des méthodes de travail adaptées au développement, ce qui m’a permis de renforcer mon efficacité et mon organisation. En parallèle, j’ai acquis des compétences dans des langages de programmation tels que React.js.";
const text2 = 'Ce BTS ainsi que ce stage m’ont permis de radicalement changer mes méthodes de travail. Euro-Réseaux m’a en effet permis d’acquérir une rigueur et des méthodes de travail très professionnelles. Par ailleurs, au cours de ce stage, j’ai pu m’organiser grâce à Microsoft Outlook, dans lequel j’organisais mes objectifs journaliers établis la veille.';


$(document).ready(function () {
    $('.crow').click(function (e) { 
        e.preventDefault();
        $.each($('.card'), function (indexInArray, valueOfElement) { 
            let cardIndex = indexInArray;
            var card = valueOfElement;
            let cardAttr = $(valueOfElement).attr('class').split(' ');
            $.each(cardAttr, function (indexInArray, valueOfElement) {
                    if (valueOfElement.startsWith('bg-' ) && (cardIndex%2 == 0 || cardIndex == 0)) {
                        $(card).removeClass(valueOfElement);
                        if(indexInArray == 0){
                            $(card).children().first().text(text1);
                        }else {
                            $(card).children().first().text(text2);
                        }
                    }
            });
        });
    });
});