function op() {
    const a = document.getElementById("navbar");
    a.style.top = "0";
}
function opp() {
    const a = document.getElementById("navbar");
    a.style.top = "-111000px";
}
gsap.from("#hamza", {
    x: -100,
    duration: 0.98,
    delay: 0.03
})
gsap.from(".hero_image", {
    y: 100,
    duration: 0.98,
    delay: 0.04
})

gsap.from(".text_inf_2", {
    y: 100,
    duration: 0.98,
    delay: 0.04
})
/*=============== copy text ===============*/
function copyText() {
    var emailElement = document.getElementById('email');

    var range = document.createRange();
    range.selectNode(emailElement);

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand('copy');

    window.getSelection().removeAllRanges();
}
function copyTex() {
    var emailElement = document.getElementById('number');

    var range = document.createRange();
    range.selectNode(emailElement);

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand('copy');

    window.getSelection().removeAllRanges();
}