(function (window, document) {

    let fields = Array.prototype.slice.call(
        document.querySelectorAll('select[data-provides="anomaly.field_type.relationship"][data-type="search"]')
    );

    fields.forEach(function (field) {
        new Choices(field, {
            shouldSort: false,
        });
    });
})(window, document);
