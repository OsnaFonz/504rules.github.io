function loadTranslations(lang) {
    $.getJSON('i18n/' + lang + '.json', function(data) {
        $('[data-i18n]').each(function() {
            var key = $(this).data('i18n');
            if (data[key]) {
                $(this).text(data[key]);
            }
        });
        $('[data-i18n-html]').each(function() {
            var key = $(this).data('i18nHtml');
            if (data[key]) {
                $(this).html(data[key]);
            }
        });
        $('[data-i18n-title]').each(function() {
            var key = $(this).data('i18nTitle');
            if (data[key]) {
                $(this).attr('title', data[key]);
            }
        });
        $('[data-i18n-alt]').each(function() {
            var key = $(this).data('i18nAlt');
            if (data[key]) {
                $(this).attr('alt', data[key]);
            }
        });
    });
}

$(function() {
    loadTranslations('en');
});
