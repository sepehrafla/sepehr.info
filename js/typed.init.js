
// Typed Text
$(".element").each(function(){
    var $this = $(this);
    $this.typed({
    strings: $this.attr('data-elements').split(','),
    typeSpeed: 60, // typing speed
    backDelay: 1500 // pause before backspacing
    });
});