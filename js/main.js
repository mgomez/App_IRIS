var login;
localforage.getItem('login').then(function (value) {
    login = value || false;
}).catch(function (err) {
    console.log(err);
    login = false;
});
$(function () {
    if (!login) {
        View('galeria/galeria.hbs');
    } else {
        View('home/home.hbs');
    }
    $(".menu a").on("click", function (e) {
        e.preventDefault();
        var view = $(this).data("view");
        View(view, []);
        toggleMenu();
    });
});

$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};